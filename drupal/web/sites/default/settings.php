<?php

foreach (scandir(__DIR__) as $file) {
    if (preg_match("/settings\..*\.php/", $file) == true
      && substr_count($file, "default") == 0) {
        include __DIR__ . "/{$file}";
    }
}

$config_directories['sync'] = '../config/sync';
$settings["config_sync_directory"] = '../config/sync';
$settings['hash_salt'] = '3wC1AognMw8kpz28uunVlUUvjm1VRiC4xuSFIEo7nFxr2OEUTzvssLPfkv8--l7yQObEva-Kqg';

#$settings['update_free_access'] = true;
#$settings['rebuild_access'] = true;

## database settings
$databases['default']['default'] = array (
  'database' => 'drupal',
  'username' => 'drupal',
  'password' => '8fjf66df;0DD2',
  'prefix' => '',
  'host' => 'localhost',
  'port' => '3306',
  'namespace' => 'Drupal\\mysql\\Driver\\Database\\mysql',
  'driver' => 'mysql',
  'autoload' => 'core/modules/mysql/src/Driver/Database/mysql/',
);

$settings['trusted_host_patterns'] = [
	'^www.open-neurosecurity.org',
	'^open-neurosecurity.org',
];
