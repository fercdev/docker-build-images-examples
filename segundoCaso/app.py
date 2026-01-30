import requests

def main():
    response = requests.get('https://httpbin.org/get')
    if response.status_code == 200:
        print("Peticion ha respondido correctamente")
    else:
        print("error en la invocacion de la peticion")

if __name__ == "__main__":
    main()