// pengenalan sistem database


/*

dimateri kali ini kita akan membahas tentang pengenalan sistem database

sistem basis data atau database management sistem atau DBMS adalah sebuah aplikasi yang digunakan untuk
mengelola data

tanpa kita menggunakan DBMS untuk mengelola data kita biasanya menggunakan excel misalnya kalian 
mengelola data customer,penjualan, data produk, dan lain lain itu biasanya menggunakan excel

nah untuk memahami database kita harus paham dulu apa itu data

data adalah representasi fakta yang ada didunia nyata 
jadi apapun yang kalian lihat dan yang kalian baca itu bisa merupakan data 

misalkan nama video judul buku lagu no ktp dan lain lain
nah sekarang problemnya bagaimana kita mengelola data data ini ?

sebelum kita berbicara mengenai data base kita pasti sudah pernah melakukan penyimpanan dan pengelolaan data 
contohnya saya mau menyimpan data data mahasiswa dalam bentuk text 

nah saya bisa menyimpannya didalam sebuah file text saja dengan menggunakan notepad
atau kalo kalian mau sedikit lebih komplex lagi kalian gunakan softwere yang memang digunakan untuk mengelola data
misalnya microsoft exel 

nah ini lebih baik lagi dari pada kita mengelola didalam notepad
jadi sepertinya tidak perlu menggunakan database 

nah walaupun seiring dengan pertambahan data seiring dengan waktu berjalan pasti timbul masalah 
masalahnya bisa macam macam
-kapasitas 
-kecepatan
-keamanan
-duplikasi 
-dll

dan masih banyak lagi problem yang muncul ketika kita mengelola datanya seperti tadi 

solusi
-skalabilitas
    lalu solusi untuk masalah ini kita memerlukan sistem yang bisa menangani skalabilitas
    artinya kalo datanya bertambah sistem atau aplikasi tersebut bisa menanganinya 

-tersedia 
    kapanpun kita meminta kapanpun kita cari datanya ada

-aman
    apakah data tersebut memiliki scuritynya atau tidak

-permanen
    nah masalah permanen atau tidak datanya 
    contohnya kita membuat data menggunakan array 
    misalkan saya akan menambahkan lagi data mahasiswanya kita bisa menggunakan php untuk menambah arraynya 
    tapi ketika kita refresh saja halamannya datanya hilang karena tidak permanen

    karena menggunakan array tadi datanya hanya ada didalam memory saja 

-dll



nah solusi solusi ini itu sudah ada didalam database 

sekarang kita balik lagi kedatabase
apa itu databases ?

nah ini banyak dari kita yang suka salah mendefinisikan database ini 

banyak yang bilang database itu ini

-oracle
-mysql
-sql server
-postgre sql
-mogoDB

nah sebetulnya ini bukan database ya walaupun dalam obrolan sesama prorgammer kita bilang ini database
padahal ini adalah softwere untuk mengelola database jadi ini disebutnya databases management sistem atau DBMS

nah sedangkan database itu sendiri adalah data yang berada didalam DBMSnya 


nah sekarang kita lihat DBMS itu adalah sebuah sofrwere atau aplikasi yang menyimpan banyak database 
jadi sebetulnya datanya ada didalam database 

aturannya keamanannya hak aksesnya ada didalam database 
nah DBMS itu mampu mengelola banyak database

dan jenis jenis DBMS itu banyak 

-relational DBMS
-herarchical DBMS
-network DBMS
-noSQL DBMS salah satunya mongoDB

nah noSQL itu artinya tidak menggunakan sql 
sql itu sendiri adalah bahasa sendiri, bahasan yang digunakan untuk melakukan interaksi pada database

nah kalo kaian lihat dibeberapa macam dbms itu ada tulisan sqlnya 
itu karena DBMS ini memiliki bahasa yang sama untuk berinteraksi dengan datanya 

jadi kalo kalian nanti belajar mengenai mysql sintax sintax didalamnya itu bisa digunakan untuk DBMS DBMS yang lainnya 
selama DBMSnya menggunakan bahasa mysql

nah mysql yang akan kita pelajari itu masuk kedalam relational DBMS
jadi didalam databasenya nanti kita bisa buat keterhubungan antar datanya 

nah pada RDBMS ini pada saat kita membuat database nanti didalamnya pasti kita membuat table 
tablenya bisa banyak didalam databasenya 

dan masing masing table nanti kita bisa hubungkan menggunakan sebuah relational 

nah untuk table yang ada didalam database ini kalian bisa bayangkan seperti table yang ada didalam exel
meskipun secara fisik itu tidak seperti ini 

kalian bisa bayangkan table biasa yang didalamnya ada baris atau nanti kita sebutnya dengan record
dan coloum atau nanti kita sebutnya dengan fild

misalkan pada table mahasiswa ada fild nama ada fild nrp ada fild email dan lain lain
nah kalian harus paham tiap tiap fild ini nantinya ada aturannya 

ada fild yang harus kalian isi menggunakan text misalnya ada yang harus kalian isi menggunakan angka 
nanti kita definisikan fild apa type datanya apa 
aturan aturan itu nanti kita akan masukkan saat membuat database



nah didalam sebuah table itu ada konsep yang dinamakan dengan primary key 
ini sangat penting kalian pahami karena rasanya setiap table itu harus memiliki primary key 




- Cara kerja DBMS

database client      SQL      DBMS    database file


nah itu adalah cara kerja dari DBMS
yang pertama siclient atau aplikasi kita  akan mengirimkan sesuatu ke DBMS

lalu apa yang akan dikirimkan oleh client?
yang dikirimkan oleh client adalah SQL 

setelah client mengirimkan SQL maka siDBMSnya akan memperoses perintah SQL tersebut
dan datanya akan disimpan dalam sebuah file yang tidak dapat kita baca 

dari database file akan dikembalikan ke DBMS dan akan dikembalikan ke client




- Database client

database client adalah sebuah aplikasi yang digunakan untuk berinterakasi dengan DBMS
akan tetapi biasanya DBMS itu sudah menyediakan database clientnya sendiri


jadi kalian tidak perlu khawatir bagaimana membuat aplikasi database client
karena DBMS sudah menyediakan aplikasi database clientnya sendiri

atau nanti kalian juga bisa membuat database client sendiri ya
menggunakan bahasa pemrograman yang kalian suka



- Database file

mayoritas database akan menyimpan datanya didalam sebuah file, walaupun ada beberapa database yang menyimpan 
datanya dimemory, akan tetapi mysql menyimpan datanya dalam sebuah file 

tapi jangan berfikir bahwa file database akan disimpan dalam bentuk excel atau csv
akan tetapi filenya berupa binary yang dapat dikelola oleh DBMSnya sendiri

jadi siDBMS ini akan mengelola database file seperti menambah,mengubah,menghapus,menampilkan, dan
masih banyak pengelolaan yang lain 

nah tiap database masing masing memiliki cara pengelolaan database file sendiri
dan kita tidak perlu tahu bagaimana cara DBMS mengelola database filenya  

yang perlu kalian tahu hanya bagaimana cara berinteraksi dengan DBMS menggunakan 
perintah sql



- SQl

sql atau structured query language adalah sebuah bahasa yang digunakan untuk mengirim
perintah ke DBMS

secara garis besar perintah sql direlatianal database itu hampir sama, namun biasanya tiap
database itu ada sedikit perbedaan dari sqlnya tapi intinya perintahnya itu hampir sama



oke jadi itu pengelanan mengenai Database Management System
mudah mudahan kalian paham




-----------------------------------

source programmer zaman now mysql

-----------------









































*/