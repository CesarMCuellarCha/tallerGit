# **Taller Introducción a Git y GITHUB** #
 
**GIT**

**Instalación de Git**
Se puede descargar del sitio oficial de GIT en [https://git-scm.com/downloads/win]

### **Qué es Git** ###

Git es un sistema de control de versiones de código abierto ideado por Linus Torvalds (el padre del sistema operativo Linux) y actualmente es el
sistema de control de versiones más extendido. A diferencia de otros SCV Git tiene una arquitectura distribuida, lo que significa que en lugar de 
guardar todos los cambios de un proyecto en un único sitio, cada usuario contiene una copia del repositorio con el historial de cambios completo 
del proyecto. Esto aumenta significativamente su rendimiento

### **Partes de un Repositorio Git** ###
- Espacio de Trabajo
- Área de Preparación
- Repositorio Local
- Repositorio Remoto

### **Estados de un archivo en Git** ###
- Sin seguimiento (U)
- Preparado (S)
- Modificado (M)
- Confirmado (C)

### **Cómo trabajar con un repositorio Local** ###
Un **repositorio Git** es un directorio oculto llamado .git que se guarda en el directorio raíz de nuestro proyecto. El directorio .git almacena el historial
de todos los cambios que se han realizado.

Lo primero que tendriamos que hacer sería crear una carpeta de nuestro proyecto.

Después creamos el repositorio por línea de comandos así: **Git init**

### **Comandos básicos para trabajar con el repositorio remoto** ###
- Agregar archivos comando:  **git add .**
- Agregar un solo archivo: **git add nombre_archivo**
- Hacer un commit para mover los archivos del área de prepaeación al repositorio: **git commit -m "primer commit"**
- Añadir archivos al último commit: **git commit --amend**
- Mover un archivo del área de preparación al área de trabajo: **git reset HEAD <archivo>**
- Deshacer cambios en el área de trabajo: **git ckeckout -- <archivo>**
- Borrar un archivo: **git rm <archivo>**

### **Trabajar con repositorios remotos** ###
Existen dos opciones para empezar a trabajar con un repositorio remoto.
- Cuando no partimos de ningún repositorio local y lo que queremos hacer es clonar el repositorio remoto en nuestra máquina.
- Cuando ya tenemos creado un repositorio local y queremos añadir un repositorio remoto para sincronizarnos.

- Clonar un repositorio remoto: **git clone <url_repositorio_remoto>**
- Ejemplo: **git clone https://github.com/CesarMCuellarCha/tallerGit.git**

Al clonar el repositorio se creará un directorio en nuestra máquina con el nombre **tallerGit** con el contenido del repositorio remoto.

### **Añadir un repositorio remoto a un repositorio ya existente** ###

Ejecutar el siguiente comando: **git remote add <alis_repositorio_local> <url_repositorio_remoto>** 
- Ejemplo: **git remote add tallerGit https://github.com/CesarMCuellarCha/tallerGit.git**
- Comprobar si el repositorio remoto se ha añadido correctamente: **git remote -v**
- Al ejecutar el comando aparece algo así:
  - tallerGit       https://github.com/CesarMCuellarCha/tallerGit.git (fetch)
  - tallerGit       https://github.com/CesarMCuellarCha/tallerGit.git (push)

Si queremos actualizar los datos de mi repositorio local con el remoto ejecutamos siguiente comando:
- **git push <alias_remoto> master**
- Ejemplo: **git push tallerGit master**

Se usa este comando para enviar al repositorio remoto los **commits** que hemos hecho en nuestro repositorio local.
La forma más habitual de usarlo es hacerlo después de cada commit.

### **Pasos resumidos para sincronizar el repositorio local con el remoto** ###
- git init
- git add .
- git commit -m "Mensajed el commit"
- git remote add <alias_local> <url_remoto>
- git push <alias_local> master


