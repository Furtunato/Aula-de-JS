# Recebe temperaturas de várias pessoas e classifica cada uma
quantidade = int(input("Quantas pessoas deseja analisar? "))
soma_temperaturas = 0

for i in range(quantidade):
    temperatura = float(input("Digite a temperatura da pessoa: "))
    soma_temperaturas = soma_temperaturas + temperatura

    if temperatura < 37.2:
        print("Temperatura normal.")
    elif temperatura >= 37.3 and temperatura <= 38.0:
        print("Estado febril.")
    elif temperatura > 38.0 and temperatura <= 39.0:
        print("Com febre.")
    else:
        print("Com febre alta.")

media = soma_temperaturas / quantidade

print("Quantidade de pessoas analisadas:", quantidade)
print("Média das temperaturas:", media)
