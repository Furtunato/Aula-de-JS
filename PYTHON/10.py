bancos= ["Banco do Brasil ", " Caixa", "Santader"]
print(bancos)
bancos[1] = "Itau"
print(bancos)
bancos[-1] = "C6"
print(bancos)

bancos = bancos + ["Bradesco","Nubank"]
print(bancos)

bancos += ["Safira"]
print(bancos)

# Exemplo de lista
lista = [4, 5, 3, 5]
print(lista)
lista.append(2)
print(lista)
lista.insert(2, -3)
print(lista)
lista.remove(4)
print(lista)
lista.sort()
print(lista)
lista.reverse()
print(lista)

qnt = lista.count(5)
print(qnt)
exc = lista.pop(2)
print(lista)
print(exc)
del lista[2]
print(lista)
del lista[2:5]
print(lista)
lista.clear()
print(lista)

# Lista dentro de lista
compra = [10.2, 3.35, 16.3,["tomate", "sabonete", "arroz"]]
print(compra)
produto = compra[3]
print(produto)
total = compra[0] + compra[1] + compra[2]
print(total)
letra = ["a", "b", "c"]
num = [2, 4, 6]
tudo = [letra, num]
print(tudo)
print(f"Letras: {tudo[0]}")
print(f"Números: {tudo[1]}")

