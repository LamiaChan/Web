<?php
  namespace Main;

  abstract class Factory {
    public static function getClass($class) {
      switch($class) {
        case 'view':
          return new View();
          break;
        case 'controller':
          return new Controller;
          break;
        case 'model':
          return new Model;
          break;
      }
    }
  }

?>
