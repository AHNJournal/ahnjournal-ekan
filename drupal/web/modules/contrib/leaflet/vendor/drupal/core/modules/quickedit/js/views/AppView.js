/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal) {
  let reload = false;
  Drupal.quickedit.AppView = Backbone.View.extend({
    initialize(options) {
      this.activeFieldStates = ['activating', 'active'];
      this.singleFieldStates = ['highlighted', 'activating', 'active'];
      this.changedFieldStates = ['changed', 'saving', 'saved', 'invalid'];
      this.readyFieldStates = ['candidate', 'highlighted'];
      this.listenTo(options.entitiesCollection, 'change:state', this.appStateChange);
      this.listenTo(options.entitiesCollection, 'change:isActive', this.enforceSingleActiveEntity);
      this.listenTo(options.fieldsCollection, 'change:state', this.editorStateChange);
      this.listenTo(options.fieldsCollection, 'change:html', this.renderUpdatedField);
      this.listenTo(options.fieldsCollection, 'change:html', this.propagateUpdatedField);
      this.listenTo(options.fieldsCollection, 'add', this.rerenderedFieldToCandidate);
      this.listenTo(options.fieldsCollection, 'destroy', this.teardownEditor);
    },

    appStateChange(entityModel, state) {
      const app = this;
      let entityToolbarView;

      switch (state) {
        case 'launching':
          reload = false;
          entityToolbarView = new Drupal.quickedit.EntityToolbarView({
            model: entityModel,
            appModel: this.model
          });
          entityModel.toolbarView = entityToolbarView;
          entityModel.get('fields').each(fieldModel => {
            app.setupEditor(fieldModel);
          });

          _.defer(() => {
            entityModel.set('state', 'opening');
          });

          break;

        case 'closed':
          entityToolbarView = entityModel.toolbarView;
          entityModel.get('fields').each(fieldModel => {
            app.teardownEditor(fieldModel);
          });

          if (entityToolbarView) {
            entityToolbarView.remove();
            delete entityModel.toolbarView;
          }

          if (reload) {
            reload = false;
            window.location.reload();
          }

          break;
      }
    },

    acceptEditorStateChange(from, to, context, fieldModel) {
      let accept = true;

      if (context && (context.reason === 'stop' || context.reason === 'rerender')) {
        if (from === 'candidate' && to === 'inactive') {
          accept = true;
        }
      } else {
        if (!Drupal.quickedit.FieldModel.followsStateSequence(from, to)) {
          accept = false;

          if (_.indexOf(this.activeFieldStates, from) !== -1 && to === 'candidate') {
            accept = true;
          } else if ((from === 'changed' || from === 'invalid') && to === 'candidate') {
            accept = true;
          } else if (from === 'highlighted' && to === 'candidate') {
            accept = true;
          } else if (from === 'saved' && to === 'candidate') {
            accept = true;
          } else if (from === 'invalid' && to === 'saving') {
            accept = true;
          } else if (from === 'invalid' && to === 'activating') {
            accept = true;
          }
        }

        if (accept) {
          let activeField;
          let activeFieldState;

          if ((this.readyFieldStates.indexOf(from) !== -1 || from === 'invalid') && this.activeFieldStates.indexOf(to) !== -1) {
            activeField = this.model.get('activeField');

            if (activeField && activeField !== fieldModel) {
              activeFieldState = activeField.get('state');

              if (this.activeFieldStates.indexOf(activeFieldState) !== -1) {
                activeField.set('state', 'candidate');
              } else if (activeFieldState === 'changed' || activeFieldState === 'invalid') {
                activeField.set('state', 'saving');
              }

              if (from === 'invalid') {
                this.model.set('activeField', fieldModel);
                accept = false;
              }
            }
          } else if (_.indexOf(this.activeFieldStates, from) !== -1 && to === 'candidate') {
            if (context && context.reason === 'mouseleave') {
              accept = false;
            }
          } else if ((from === 'changed' || from === 'invalid') && to === 'candidate') {
            if (context && context.reason === 'mouseleave') {
              accept = false;
            } else if (context && context.confirmed) {
              accept = true;
            }
          }
        }
      }

      return accept;
    },

    setupEditor(fieldModel) {
      const entityModel = fieldModel.get('entity');
      const entityToolbarView = entityModel.toolbarView;
      const fieldToolbarRoot = entityToolbarView.getToolbarRoot();
      const editorName = fieldModel.get('metadata').editor;
      const editorModel = new Drupal.quickedit.EditorModel();
      const editorView = new Drupal.quickedit.editors[editorName]({
        el: $(fieldModel.get('el')),
        model: editorModel,
        fieldModel
      });
      const toolbarView = new Drupal.quickedit.FieldToolbarView({
        el: fieldToolbarRoot,
        model: fieldModel,
        $editedElement: $(editorView.getEditedElement()),
        editorView,
        entityModel
      });
      const decorationView = new Drupal.quickedit.FieldDecorationView({
        el: $(editorView.getEditedElement()),
        model: fieldModel,
        editorView
      });
      fieldModel.editorView = editorView;
      fieldModel.toolbarView = toolbarView;
      fieldModel.decorationView = decorationView;
    },

    teardownEditor(fieldModel) {
      if (typeof fieldModel.editorView === 'undefined') {
        return;
      }

      fieldModel.toolbarView.remove();
      delete fieldModel.toolbarView;
      fieldModel.decorationView.remove();
      delete fieldModel.decorationView;
      fieldModel.editorView.remove();
      delete fieldModel.editorView;
    },

    confirmEntityDeactivation(entityModel) {
      const that = this;
      let discardDialog;

      function closeDiscardDialog(action) {
        discardDialog.close(action);
        that.model.set('activeModal', null);

        if (action === 'save') {
          entityModel.set('state', 'committing', {
            confirmed: true
          });
        } else {
          entityModel.set('state', 'deactivating', {
            confirmed: true
          });

          if (entityModel.get('reload')) {
            reload = true;
            entityModel.set('reload', false);
          }
        }
      }

      if (!this.model.get('activeModal')) {
        const $unsavedChanges = $(`<div>${Drupal.t('You have unsaved changes')}</div>`);
        discardDialog = Drupal.dialog($unsavedChanges.get(0), {
          title: Drupal.t('Discard changes?'),
          dialogClass: 'quickedit-discard-modal',
          resizable: false,
          buttons: [{
            text: Drupal.t('Save'),

            click() {
              closeDiscardDialog('save');
            },

            primary: true
          }, {
            text: Drupal.t('Discard changes'),

            click() {
              closeDiscardDialog('discard');
            }

          }],
          closeOnEscape: false,

          create() {
            $(this).parent().find('.ui-dialog-titlebar-close').remove();
          },

          beforeClose: false,

          close(event) {
            $(event.target).remove();
          }

        });
        this.model.set('activeModal', discardDialog);
        discardDialog.showModal();
      }
    },

    editorStateChange(fieldModel, state) {
      const from = fieldModel.previous('state');
      const to = state;

      if (_.indexOf(this.singleFieldStates, to) !== -1 && this.model.get('highlightedField') !== fieldModel) {
        this.model.set('highlightedField', fieldModel);
      } else if (this.model.get('highlightedField') === fieldModel && to === 'candidate') {
        this.model.set('highlightedField', null);
      }

      if (_.indexOf(this.activeFieldStates, to) !== -1 && this.model.get('activeField') !== fieldModel) {
        this.model.set('activeField', fieldModel);
      } else if (this.model.get('activeField') === fieldModel && to === 'candidate') {
        if (from === 'changed' || from === 'invalid') {
          fieldModel.editorView.revert();
        }

        this.model.set('activeField', null);
      }
    },

    renderUpdatedField(fieldModel, html, options) {
      const $fieldWrapper = $(fieldModel.get('el'));
      const $context = $fieldWrapper.parent();

      const renderField = function () {
        fieldModel.destroy();
        $fieldWrapper.replaceWith(html);
        Drupal.attachBehaviors($context.get(0));
      };

      if (!options.propagation) {
        _.defer(() => {
          fieldModel.set('state', 'candidate');

          _.defer(() => {
            fieldModel.set('state', 'inactive', {
              reason: 'rerender'
            });
            renderField();
          });
        });
      } else {
        renderField();
      }
    },

    propagateUpdatedField(updatedField, html, options) {
      if (options.propagation) {
        return;
      }

      const htmlForOtherViewModes = updatedField.get('htmlForOtherViewModes');
      Drupal.quickedit.collections.fields.where({
        logicalFieldID: updatedField.get('logicalFieldID')
      }).forEach(field => {
        if (field === updatedField) {} else if (field.getViewMode() === updatedField.getViewMode()) {
          field.set('html', updatedField.get('html'));
        } else if (field.getViewMode() in htmlForOtherViewModes) {
          field.set('html', htmlForOtherViewModes[field.getViewMode()], {
            propagation: true
          });
        }
      });
    },

    rerenderedFieldToCandidate(fieldModel) {
      const activeEntity = Drupal.quickedit.collections.entities.findWhere({
        isActive: true
      });

      if (!activeEntity) {
        return;
      }

      if (fieldModel.get('entity') === activeEntity) {
        this.setupEditor(fieldModel);
        fieldModel.set('state', 'candidate');
      }
    },

    enforceSingleActiveEntity(changedEntityModel) {
      if (changedEntityModel.get('isActive') === false) {
        return;
      }

      changedEntityModel.collection.chain().filter(entityModel => entityModel.get('isActive') === true && entityModel !== changedEntityModel).each(entityModel => {
        entityModel.set('state', 'deactivating');
      });
    }

  });
})(jQuery, _, Backbone, Drupal);