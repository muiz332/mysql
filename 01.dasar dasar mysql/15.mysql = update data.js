// update data



/*

nah sekarang kita akan membahas mengenai update data
untuk mengubah data didalam table kita bisa menggunakan perintah UPDATE

saat kita menggunakan sql update, kita harus memberitahu dulu data mana yang
mau kita update 

jadi kita bisa memanfaatkan perintah where ya untuk memilih data yang spesifik
hati hati jika wherenya salah atau kita lupa untuk menuliskan wherenya

maka itu akan mengakibatkan semua data terupdate
jadi kalian harus hati hati


lalu kalian kasih tahu dulu column nama yang mau diupdate dan value 
barunya itu apa



jadi sebelum itu kita tambahkan satu column dulu yang namanya category 
didalam table products

alter table products
add column category enum ("Makanan","Minuman","lain-Lain") after name;


kalo kita lihat datanya 


MariaDB [belajar_mysql]> select * from products;
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
| id    | name                | category | description                    | price | quantity | created_at          |
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
| P0001 | Mie Ayam Original   | NULL     | NULL                           | 15000 |      100 | 2022-11-01 15:03:43 |
| P0002 | Mie Ayam Bakso Tahu | NULL     | Mie Ayam Original + Bakso Tahu | 20000 |      100 | 2022-11-01 15:03:54 |
| P0003 | Mie Ayam Ceker      | NULL     | NULL                           | 20000 |      100 | 2022-11-01 15:04:01 |
| P0004 | Mie Ayam Spesial    | NULL     | NULL                           | 25000 |      100 | 2022-11-01 15:04:01 |
| P0005 | Mie Ayam Yamin      | NULL     | NULL                           | 15000 |      100 | 2022-11-01 15:04:01 |
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
5 rows in set (0.001 sec)


maka semua ada bernilai null

nah sekarang kita akan coba menupdate data category ini




- Mengubah satu column

jadi untuk mengubah satu column itu kalian bisa tulis seperti ini


update products set category = "Makanan" where id = "P0001";

jadi ini bacanya 
ubah table product atur column category dengan makanan dimana
idnya sama dengan P0001

kita jalankan 

MariaDB [belajar_mysql]> select * from products;
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
| id    | name                | category | description                    | price | quantity | created_at          |
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
| P0001 | Mie Ayam Original   | Makanan  | NULL                           | 15000 |      100 | 2022-11-01 15:03:43 |
| P0002 | Mie Ayam Bakso Tahu | NULL     | Mie Ayam Original + Bakso Tahu | 20000 |      100 | 2022-11-01 15:03:54 |
| P0003 | Mie Ayam Ceker      | NULL     | NULL                           | 20000 |      100 | 2022-11-01 15:04:01 |
| P0004 | Mie Ayam Spesial    | NULL     | NULL                           | 25000 |      100 | 2022-11-01 15:04:01 |
| P0005 | Mie Ayam Yamin      | NULL     | NULL                           | 15000 |      100 | 2022-11-01 15:04:01 |
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
5 rows in set (0.000 sec)

kalo kita lihat id dengan P0001 itu categorynya sudah menjadi Makanan

jadi misalkan kalian wherenya itu name, misalkan namanya mie
kalo didalam table kita misalkan nama mie itu ada 3

maka ketiga data tersebut itu terupdate





- Mengubah beberapa column

misalkan kita ingin mengubah beberapa column, dimana column yang kita ubah itu
category = Makanan dan description = Mie Ayam + Ceker yang idnya P0003

jadi kita bisa tulis

update products set category = "Makanan",description = "Mie Ayam + Ceker" where id = "P0003";

jadi kita tinggal pisahkan dengan koma aja ya
kita lihat

MariaDB [belajar_mysql]> select * from products;
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
| id    | name                | category | description                    | price | quantity | created_at          |
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
| P0001 | Mie Ayam Original   | Makanan  | NULL                           | 15000 |      100 | 2022-11-01 15:03:43 |
| P0002 | Mie Ayam Bakso Tahu | NULL     | Mie Ayam Original + Bakso Tahu | 20000 |      100 | 2022-11-01 15:03:54 |
| P0003 | Mie Ayam Ceker      | Makanan  | Mie Ayam + Ceker               | 20000 |      100 | 2022-11-01 15:04:01 |
| P0004 | Mie Ayam Spesial    | NULL     | NULL                           | 25000 |      100 | 2022-11-01 15:04:01 |
| P0005 | Mie Ayam Yamin      | NULL     | NULL                           | 15000 |      100 | 2022-11-01 15:04:01 |
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
5 rows in set (0.000 sec)

maka category dan description yang idnya P0003 akan berubah





- Mengubah dengan value dicolumn 

nah gimana kalo misalkan kalian ingin mengubah column tapi menggunakan nilai
column yang sebelumnya 


misalkan saya ingin mengubah column price saya tambahkan 5000 yang idnya P0004
kita bisa tulis seperti ini


update products set price = price + 5000 where id = "P0004";

kalo kita jalankan

+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
| id    | name                | category | description                    | price | quantity | created_at          |
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
| P0001 | Mie Ayam Original   | Makanan  | NULL                           | 15000 |      100 | 2022-11-01 15:03:43 |
| P0002 | Mie Ayam Bakso Tahu | NULL     | Mie Ayam Original + Bakso Tahu | 20000 |      100 | 2022-11-01 15:03:54 |
| P0003 | Mie Ayam Ceker      | Makanan  | Mie Ayam + Ceker               | 20000 |      100 | 2022-11-01 15:04:01 |
| P0004 | Mie Ayam Spesial    | NULL     | NULL                           | 30000 |      100 | 2022-11-01 15:04:01 |
| P0005 | Mie Ayam Yamin      | NULL     | NULL                           | 15000 |      100 | 2022-11-01 15:04:01 |
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
5 rows in set (0.001 sec)

maka price dari id P0004 akan menjadi 30000
jadi kalian tinggal panggil nama columnya lalu mau kalian apakan

mau ditambah mau dibagi dan lain lain


jadi itu ya jika mau mengupdate data 
mudah mudahan kalian paham









-----------------------------------

source programmer zaman now mysql

-----------------















*/