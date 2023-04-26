# Tarjeta de crédito válida

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Objetivos generales](#2-objetivos-generales)
* [3. Funciones de proyecto](#3-funciones-del-proyecto)
* [4. Actividades del proyecto](#4-consideraciones-técnicas)
* [5. Instrucciones de uso](#5-Instrucciones-de-Uso)

## 1. Resumen del proyecto

El proyecto consiste en una pagina Web la cual tiene como objetivo validar una Tarjeta de credito a traves del algoritmo de Luhn. 

Se crea una simulación de un negocio de joyas en el cual el Cliente debe digitalizar sus datos para poder hacer efectiva su compra, si su tarjeta es valida entregara el mensaje “Tu compra fue realizada con éxito” y por el contrario si la tarjeta no es validada bajo el algoritmo de Luhn aparecerá un mensaje de “Ups!, tu tarjeta fue rechazada”.

## 2. Los objetivos generales de este proyecto son los siguientes

* Trabajar en base a un boilerplate, la estructura básica de un proyecto en
  distintas carpetas (a través modulos en JS).
* Conocer las herramientas de mantenimiento y mejora del código (linters y
  pruebas unitarias).
* Aprender sobre objetos, estructuras, métodos e iteración (bucles)
  en JavaScript
* Implementar control de versiones con git (y la plataforma github)

## 3. Algunas de las funciones que el proyecto realiza son: 

* Insertar un numero que quieres validar, ademas de otros datos importantes del cliente para que nuestro sitio para que la experiencia del usuario sea mas real. 
* Usar solo caracteres numéricos (dígitos) en la tarjeta a validar [0-9].  
* Se entrega Resultado si la tarjeta es valida o no 
* Ocultar todos los dígitos del número de tarjeta a excepción de los últimos
  4 caracteres.  
* No debes poder ingresar un campo vacío.  

## 4. Actividades dentro del proyecto. 
* Crear un prototipo 
* Creación de Esqueleto de HTML básico y sus respectivas secciones.
* Crear Formulario con datos principales del cliente. 
* Obtener datos de usuario en JavaScript para comenzar a realizar funciones.
* Verificar que sea necesario completar todos los campos, si no, entregar Alert.  
* Validator: 
    * Convertir input tipo number en un Array en el cual se separe todos los dígitos.
    * Multiplicar los números que se encuentran en ubicación par. 
    * Sumar los números del Array. 
    * Verificar si el resultado es válido o no al dividirlo por 10 y su resultado es cero. 
    * Mostrar resultado en pantalla. 
* Maskify: 
    * Pasar número a un String 
    * Ver si el string tiene menos de 4 letras y si es así que retorne el string, si no, los dígitos anteriores reemplazarlos por #. 
* Realización de pruebas unitarias.
* Realización de ventana modal para entrega de verificación final para el cliente donde entrega si tarjeta es válida o no y números enmascarados.

## 4. Instrucciones de uso.
* Agregar datos de tarjeta de credito en campos correspondientes. 
* Si aparece alerta, por favor completar todos los datos necesarios. 
* confirmar datos. 
* Verificar si tarjeta fue validada o no, si fue validada tu compra fue realizada con exito. 
 