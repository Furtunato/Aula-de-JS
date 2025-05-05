# Somando números do intervalo informando limitando 
inicio = int(input('Informe o primeiro numero: '))
fim = int(input('Informe o numero final: '))
salto = int(input('Informe o salto: '))
texto = "Calculo"
soma = 0
for numero in range(inicio, fim, salto):
    soma = soma + numero
    texto = texto + str(numero)
    if numero > 50:
        texto = texto + "\nPassou de 50"
        break
    if numero != fim-1:
        texto = texto + "+"
print(f"{texto}")
print(f"Soma: {soma}")