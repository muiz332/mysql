// database


/*

apa itu database? database adalah sebuah tempat untuk menyimpan table dimysql
jadi saat kalian menggunakan mysql kalian harus bikin database dulu 

dimana database tersebut yang nanti digunakan diaplikasi kita
dan database itu dapat menyimpan banyak table sekaligus


kalian bisa ibaratkan seperti ini 
jika table dimysql itu adalah sebuah file, maka database itu adalah sebuah folder yang mampu menyimpan
banyak file sekaligus

dan ingat biasanya 1 database itu digunakan untuk 1 aplikasi juga
misalkan kalian ingin membuat toko online

dengan nama databasenya toko_online 
didalamnya itu ada table barang,pelanggan, penjualan,dan lain lain

walupun 1 aplikasi itu bisa menggunakan lebih dari satu database 
tapi itu tidak bagus karena kita buang buang database

cukup 1 database dengan 1 aplikasi 
yang didalam 1 database tersebut kita bisa menyimpan banyak data yang berhubungan
dengan aplikasi kita



nah saat kalian masuk kedalam mysql menggunakan mysql client
kalian bisa menampilkan database dengan mengetikkan perintah 

show databases;

jangan lupa diakhiri titik koma

nah jika ada database bawaan kalian tidak boleh menghapusnya 
kerena itu akan mengakibatkan masalah dari mysqlnya

karena itu bawaan dari mysqlnya dan jangan mengubahnya



- Membuat database

untuk membuat database kalian tinggal tuliskan 
create database nama_database;

dan tidak boleh ada spasi dinama databasenya dan biasankan menggunakan huruf kecil semua
karena itu yang disarankan para programmer

nah untuk kasus kita, kita bisa membuat database dengan nama belajar_mysql
jadi kalian tulis

create database belajar_mysql;

kalo kalian jalankan maka akan tampil seperti ini

MariaDB [(none)]> create database belajar_mysql;
Query OK, 1 row affected (0.001 sec)

ini saya pakai xampp ya 
jika berhasil maka akan tampil query ok

kalo kalian show databases;

maka akan tampil database belajar_mysql




- Menghapus database

nah jika kalian ingin menghapus database itu kalian cukup tuliskan 

drop database nama_database;

jadi kalo didalam databasenya itu ada banyak table maka table yang ada didalam database
yang kalian hapus maka semua table akan hilang

dan itu permanent ya, tidak bisa dikembalikan 
jadi hati hati jika ingin menghapus database




- Melilih database

nah setelah kalian membuat database kalian harus memilih dulu database mana yang akan kalian gunakan
karena jika kita tidak memilih database maka kita tidak bisa membuat table
dan operasi yang lain

caranya kalian tinggal tulis

use nama_database;


MariaDB [(none)]> use belajar_mysql;
Database changed
MariaDB [belajar_mysql]>

jika kalian lihat sebelumnya itu ada tulisan none
nah itu sebelum memilih databasenya

setelah memilih databasenya maka none akan berubah menjadi nama database
kita



oke jadi itu mengenai database dimysql
mudah mudahan kalian paham









-----------------------------------

source programmer zaman now mysql

-----------------





































*/