* ## No Docker Hub , utilizando a caixa de busca ( "Search for great content" ) , busque pela imagem da Distribuição Linux Debian ;

* ## Uma vez que encontrar a imagem oficial , acesse-a (clicando em seu card) e verifique na página de detalhes, se existe algum comando para baixarmos a imagem localmente sem ter que criar um container para isso ;

* ## Baixe a imagem utilizando a tag : stable-slim , que é uma versão reduzida da distribuição;
```console
$ docker image pull debian:stable-slim
```
* ## Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência (não esqueça referenciar a tag ) ;
```console
$ docker container run -ti debian:stable-slim
```
* ## No terminal, você deve conseguir rodar o comando cat /etc/*-release , que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container ;
```console
# cat /etc/*-release
PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
NAME="Debian GNU/Linux"
VERSION_ID="11"
VERSION="11 (bullseye)"
VERSION_CODENAME=bullseye
ID=debian
HOME_URL="https://www.debian.org/"
SUPPORT_URL="https://www.debian.org/support"
BUG_REPORT_URL="https://bugs.debian.org/"
```
* ## Encerre o terminal ;
```console
# exit
```
* ## Verifique na sua lista de containers , qual o container é referente ao exercício que acabou de praticar;
```console
$ docker container ls -l
```
* ## Inicie o mesmo container novamente , sem criar outro. Valide se ele está ativo na lista de containers;
```console
$ docker container start gifted_haib
$ docker container ls
```
* ## Retome o container que foi criado anteriormente nesse exercício ;
```console
$ docker container attach gifted_haib
```
* ## Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container ;
```console
# cat /etc/debian_version
11.2
```
* ## Encerre o terminal ;
```console
# exit
```
* ## Remova somente o container criado para esse exercício ;
```console
$ docker container rm gifted_haib
```
* ## (Bônus) Crie e rode de modo interativo em modo 'Cleanup' , a imagem andrius/ascii-patrol ;
```console
docker container run -ti --rm andrius/ascii-patrol
```
* ## (Bônus) Encerre o container utilizando os botões [ ctrl ] + [ c ].
