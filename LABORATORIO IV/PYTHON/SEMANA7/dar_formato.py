
# dar formato a un string, clase 6.1
nombre = "Ariel"
edad = 26
#mensaje_con_formato = 'Mi nombre es %s'%nombre
mensaje_con_formato = 'Mi nombre es %s y tengo %d años'% (nombre, edad)
# print(mensaje_con_formato)
persona = ('Carla', 'Gomez', 5000)
#mensaje_con_formato = 'Hola %s %s .tu sueldo es %.2f'# % persona, aqui le pasamos el objeto
# print(mensaje_con_formato % persona)
# c 6.3
nombre = 'Juan'
edad = 19
sueldo = 3000
# mensaje_con_formato = 'Nombre{} edad {} Sueldo {:.2f}'.format(nombre, edad, sueldo)
# print(mensaje_con_formato)
# mensaje = 'Nombre {0} Edad {1} Sueldo {2:.2f}'.format(nombre, edad, sueldo)
# print(mensaje)# con esto podemos invertir la muestra en pantalla
mensaje = 'Nombre {n} Edad {e} Sueldo {s:2f}'.format(n=nombre, e=edad, s=sueldo)
# print(mensaje)
diccionario = {'nombre': 'Ivan', 'Edad': 35, 'Sueldo': 8000.00}
mensaje = 'Nombre {persona[nombre]} Edad {persona[Edad]} Sueldo {persona[Sueldo]:.2f}'.format(persona=diccionario)
print(mensaje)
