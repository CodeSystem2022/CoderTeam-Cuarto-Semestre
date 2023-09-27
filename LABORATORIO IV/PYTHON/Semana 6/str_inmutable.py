# STRING INMUTABLES - Las variables que tienen cadenas, no pueden modificarse.
# help(str.capitalize) # convierte el primer caracter a mayúscula

mensaje1 = "hola mundo"
mensaje2 = mensaje1.capitalize()
# debería poner la H en mayúscula pero no la modifica
# Lo que hace es crear en mensaje2 una cadena nueva, no modificar la de mensaje1

print(f'Mensaje1: {mensaje1}, id: {id(mensaje1)}') # vemos el id interno para esta variable
print(f'Mensaje2: {mensaje2}, id: {id(mensaje2)}') # id distinto, son dos objetos distintos

mensaje1 += ' Adiós' # es una nueva cadena
print(f'Mensaje1: {mensaje1}, id: {id(mensaje1)}')