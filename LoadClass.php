<?php
  use Main\Factory as Factory;

  spl_autoload_register(function($class) {
   $path = __DIR__ . '/' . strtolower(str_replace('\\', '/', $class)) . '.php';
    if (file_exists($path)) {
    require_once $path;
   } else {
  echo $path;
  }
});

define('MAIN', __DIR__);


      $view       = (Factory::getClass('view'));    
      $model      = (Factory::getClass('model'));
      $controller = (Factory::getClass('controller'));  



 ?>
