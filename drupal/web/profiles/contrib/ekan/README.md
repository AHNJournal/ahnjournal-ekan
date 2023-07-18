# Installing EKAN

## The Short Version

```
  composer create-project eightyoptions/ekan_distribution:1.1.0 drupal
```

## The Long Version

```
  composer create-project drupal/recommended-project:^9.5 drupal
  cd drupal
  composer config extra.enable-patching --json true
  composer config minimum-stability dev
  composer require eightyoptions/ekan:^1.1.1

```
