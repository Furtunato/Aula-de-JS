# Função para converter polegadas para milímetros
def polegadas_para_milimetros(polegadas):
    """
    Converte um valor em polegadas para milímetros.
    1 polegada = 25.4 milímetros.
    """
    return polegadas * 25.4

# Função para converter PSI para Pascal
def psi_para_pascais(psi):
    """
    Converte um valor em PSI para Pascal.
    1 PSI = 6894.76 Pascal.
    """
    return psi * 6894.76

# Função para converter PSI para Bar
def psi_para_bar(psi):
    """
    Converte um valor em PSI para Bar.
    1 PSI = 0.0689476 Bar.
    """
    return psi * 0.0689476

# Função para mostrar o menu de opções
def mostrar_menu():
    """
    Exibe o menu de opções para o usuário escolher qual conversão deseja fazer.
    """
    print("\nEscolha uma das opções de conversão:")
    print("1 - Polegadas para Milímetros")
    print("2 - PSI para Pascal")
    print("3 - PSI para Bar")
    print("0 - Sair")

# Função principal que controla o fluxo do programa
def main():
    """
    Função principal que executa o programa.
    O programa continua executando até que o usuário escolha a opção de sair.
    """
    while True:
        mostrar_menu()  # Exibe o menu
        escolha = input("Digite sua escolha: ")
        
        if escolha == '1':
            try:
                polegadas = float(input("Digite o valor em polegadas: "))
                print(f"{polegadas} polegadas é igual a {polegadas_para_milimetros(polegadas)} milímetros.")
            except ValueError:
                print("Por favor, insira um número válido para as polegadas.")
        
        elif escolha == '2':
            try:
                psi = float(input("Digite o valor em PSI: "))
                print(f"{psi} PSI é igual a {psi_para_pascais(psi)} Pascal.")
            except ValueError:
                print("Por favor, insira um número válido para PSI.")
        
        elif escolha == '3':
            try:
                psi = float(input("Digite o valor em PSI: "))
                print(f"{psi} PSI é igual a {psi_para_bar(psi)} Bar.")
            except ValueError:
                print("Por favor, insira um número válido para PSI.")
        
        elif escolha == '0':
            print("Saindo...")
            break
        
        else:
            print("Opção inválida! Tente novamente.")

# Executa o programa
if __name__ == "__main__":
    main()
