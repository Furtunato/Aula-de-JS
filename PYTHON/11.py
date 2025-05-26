# Metodos utilizado em listas

letra = ["a", "b", "c"]
print(f"tamanho da lista: {len(letra)}")
print(f"endereço da letra b: {letra.index('b')}")

letras = ["a", "b", "c", "d", "e", "f"]
var = input("Digite uma letra: ")
if var.lower() in letras:
    print(f"A letra {var} está na lista.")
else:
    print(f"A letra {var} não está na lista.")