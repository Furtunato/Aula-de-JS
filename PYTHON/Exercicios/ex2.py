# Lê 10 números inteiros e mostra o maior, o menor e a média
numeros = []

for i in range(10):
    numero = int(input("Digite um número inteiro: "))
    numeros.append(numero)

maior = numeros[0]
menor = numeros[0]
soma = 0

for numero in numeros:
    if numero > maior:
        maior = numero
    if numero < menor:
        menor = numero
    soma = soma + numero

media = soma / 10

print("Maior número:", maior)
print("Menor número:", menor)
print("Média dos números:", media)
