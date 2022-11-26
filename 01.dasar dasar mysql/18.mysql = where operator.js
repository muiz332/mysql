// where operator


/*

dimateri kali ini kita akan membahas mengenai where operator


sebelumnya kita sudah bahas mengenai where clause, nah sekarang kita akan
bahas lebih detil dari where ini 

jadi operator operator apa saja sih yang kita bisa gunakan untuk
mengambil data yang lebih spesifik


sebelumnya kita sudah menggunakan operator = sama dengan 
selain sama dengan masih banyak operator yang bisa kita gunakan

macam macam operator

=
<> atau !=
<
>
<=
>=


sebelum mencobanya kita tambahkan dulu datanya

INSERT INTO products (id, category, name, price, quantity)
VALUES ("P0006", "Makanan",'Bakso Rusuk', 25000, 200),
('P0007', 'Minuman', 'Es Jeruk', 10000, 300),
('P0008', 'Minuman', 'Es Campur', 15000, 580),
('P0009', 'Minuman', "Es Teh Manis", 5000, 400),
('P0010', 'Lain-Lain', "Kerupuk", 2500, 1000),
('P0011', 'Lain-Lain', "Kecinik Udang", 10000, 300),
('P0012', 'Lain-Lain', 'Es Krim', 5000, 200),
('P0013', 'Makanan', "Mie Ayam Jamur", 20000, 50),
('P0014', "Makanan", 'Bakso Telor', 20000, 150),
('P0015', "Makanan", "Bakso Jandg", 25000, 300);

nah kita coba

misalkan saya ingin mengambil products dengan harga yang lebih besar sama dengan 20000
jadi saya bisa tulis begini

select * from products where price >= 20000;


MariaDB [belajar_mysql]> select * from products where price >= 20000;
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
| id    | name                | category | description                    | price | quantity | created_at          |
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
| P0002 | Mie Ayam Bakso Tahu | NULL     | Mie Ayam Original + Bakso Tahu | 20000 |      100 | 2022-11-01 15:03:54 |
| P0003 | Mie Ayam Ceker      | Makanan  | Mie Ayam + Ceker               | 20000 |      100 | 2022-11-01 15:04:01 |
| P0004 | Mie Ayam Spesial    | NULL     | NULL                           | 30000 |      100 | 2022-11-01 15:04:01 |
| P0006 | Bakso Rusuk         | Makanan  | NULL                           | 25000 |      200 | 2022-11-25 19:49:45 |
| P0013 | Mie Ayam Jamur      | Makanan  | NULL                           | 20000 |       50 | 2022-11-25 19:50:31 |
| P0014 | Bakso Telor         | Makanan  | NULL                           | 20000 |      150 | 2022-11-25 19:50:31 |
| P0015 | Bakso Jandg         | Makanan  | NULL                           | 25000 |      300 | 2022-11-25 19:50:31 |
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
7 rows in set (0.001 sec)


maka hasilnya akan menampilkan price dengan harga lebih besar sama dengan 20000
untuk operator yang lain kalian bisa coba coba sendiri ya




- operator logika

and
or

nah kita bisa menggunakan operator logika ketika kita ingin mencari sesuatu 
dengan 2 atau lebih kondisi tertentu

misalkan saya ingin mencari product dengan harga lebih besar 20000 dan yang quantitynya itu 
lebih besar 100

select * from products where price > 20000 and quantity > 100;


MariaDB [belajar_mysql]> select * from products where price > 20000 and quantity > 100;
+-------+-------------+----------+-------------+-------+----------+---------------------+
| id    | name        | category | description | price | quantity | created_at          |
+-------+-------------+----------+-------------+-------+----------+---------------------+
| P0006 | Bakso Rusuk | Makanan  | NULL        | 25000 |      200 | 2022-11-25 19:49:45 |
| P0015 | Bakso Jandg | Makanan  | NULL        | 25000 |      300 | 2022-11-25 19:50:31 |
+-------+-------------+----------+-------------+-------+----------+---------------------+
2 rows in set (0.001 sec)

maka hasilnya akan seperti itu ya

untuk yang or kalian bisa coba sendiri 



nah jika kalian menggunakan and dan or
maka defaultnya yang dominan adalah yang and dulu baru or

misalkan 


> 100 and <= 20000 or category makanan

jadi dia akan memilih quantity lebih besar 100 dan pricenya
lebih kecil sama dengan 20000 

setelah ketemu maka operator or dijalankan
dia akan mengencheck categorynya makanan atau bukan


tapi ketika kalian menambahkan kurung


quantity > 100 and (price <= 20000 or category makanan)

maka yang dijalankan akan yang didalam kurung tersebih dahulu




- like operator


nah ketika kalian ingin mencari sesuatu berdasarkan text 
kalian bisa menggunakan like operator 

kita coba

misalkan saya ingin mencari sebuah product memiliki kata mie

select * from products where name like 'mie%';

MariaDB [belajar_mysql]> select * from products where name like 'mie%';
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
| id    | name                | category | description                    | price | quantity | created_at          |
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
| P0001 | Mie Ayam Original   | Makanan  | NULL                           | 15000 |      100 | 2022-11-01 15:03:43 |
| P0002 | Mie Ayam Bakso Tahu | NULL     | Mie Ayam Original + Bakso Tahu | 20000 |      100 | 2022-11-01 15:03:54 |
| P0003 | Mie Ayam Ceker      | Makanan  | Mie Ayam + Ceker               | 20000 |      100 | 2022-11-01 15:04:01 |
| P0004 | Mie Ayam Spesial    | NULL     | NULL                           | 30000 |      100 | 2022-11-01 15:04:01 |
| P0005 | Mie Ayam Yamin      | NULL     | NULL                           | 15000 |      100 | 2022-11-01 15:04:01 |
| P0013 | Mie Ayam Jamur      | Makanan  | NULL                           | 20000 |       50 | 2022-11-25 19:50:31 |
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
6 rows in set (0.000 sec)

nah tanda persen dibelakang kata mie itu artinya kita akan mencari 
kata mie diawal kata pada colume name

jika kalian mencari akhiran jamur, kalian bisa tulis seperti ini


select * from products where name like '%jamur';


MariaDB [belajar_mysql]> select * from products where name like '%jamur';
+-------+----------------+----------+-------------+-------+----------+---------------------+
| id    | name           | category | description | price | quantity | created_at          |
+-------+----------------+----------+-------------+-------+----------+---------------------+
| P0013 | Mie Ayam Jamur | Makanan  | NULL        | 20000 |       50 | 2022-11-25 19:50:31 |
+-------+----------------+----------+-------------+-------+----------+---------------------+
1 row in set (0.000 sec)


jika kalian ingin mencari kata yang berisi sesuatu
kalian tinggal tambahkan tanda % dikedua sisi


select * from products where name like '%ayam%';



MariaDB [belajar_mysql]> select * from products where name like '%ayam%';
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
| id    | name                | category | description                    | price | quantity | created_at          |
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
| P0001 | Mie Ayam Original   | Makanan  | NULL                           | 15000 |      100 | 2022-11-01 15:03:43 |
| P0002 | Mie Ayam Bakso Tahu | NULL     | Mie Ayam Original + Bakso Tahu | 20000 |      100 | 2022-11-01 15:03:54 |
| P0003 | Mie Ayam Ceker      | Makanan  | Mie Ayam + Ceker               | 20000 |      100 | 2022-11-01 15:04:01 |
| P0004 | Mie Ayam Spesial    | NULL     | NULL                           | 30000 |      100 | 2022-11-01 15:04:01 |
| P0005 | Mie Ayam Yamin      | NULL     | NULL                           | 15000 |      100 | 2022-11-01 15:04:01 |
| P0013 | Mie Ayam Jamur      | Makanan  | NULL                           | 20000 |       50 | 2022-11-25 19:50:31 |
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
6 rows in set (0.001 sec)


maka ahasilnya akan seperti itu
tapi ingat menggunakan like akan memperburuk aplikasi kalian

jika kalian memiliki data yang banyak dan ingin mencari dalam bentuk text
kalian jangan menggunakan like operator

karena like operator akan mengecheck data dari awal sampai akhir
itu akan sangat lama jika datanya sudah besar

mysql mengatasi hal tersebut dengan menggunakan sesuatu yang dinamakan 
dengan text index


dan kalian juga bisa pakai not like






- null operator

is null
is not null


nah ketika kalian ingin mencari data yang valuenya null, kalian tidak 
bisa menggunakan operator sama dengan 

kalian harus menggunakan is null atau is not null
untuk berinteraksi dengan data null

misalkan saya ingin mencari data description yang null

select * from products where description is null;


MariaDB [belajar_mysql]> select * from products where description is null;
+-------+-------------------+-----------+-------------+-------+----------+---------------------+
| id    | name              | category  | description | price | quantity | created_at          |
+-------+-------------------+-----------+-------------+-------+----------+---------------------+
| P0001 | Mie Ayam Original | Makanan   | NULL        | 15000 |      100 | 2022-11-01 15:03:43 |
| P0004 | Mie Ayam Spesial  | NULL      | NULL        | 30000 |      100 | 2022-11-01 15:04:01 |
| P0005 | Mie Ayam Yamin    | NULL      | NULL        | 15000 |      100 | 2022-11-01 15:04:01 |
| P0006 | Bakso Rusuk       | Makanan   | NULL        | 25000 |      200 | 2022-11-25 19:49:45 |
| P0007 | Es Jeruk          | Minuman   | NULL        | 10000 |      300 | 2022-11-25 19:49:45 |
| P0008 | Es Campur         | Minuman   | NULL        | 15000 |      580 | 2022-11-25 19:50:31 |
| P0009 | Es Teh Manis      | Minuman   | NULL        |  5000 |      400 | 2022-11-25 19:50:31 |
| P0010 | Kerupuk           | lain-Lain | NULL        |  2500 |     1000 | 2022-11-25 19:50:31 |
| P0011 | Kecinik Udang     | lain-Lain | NULL        | 10000 |      300 | 2022-11-25 19:50:31 |
| P0012 | Es Krim           | lain-Lain | NULL        |  5000 |      200 | 2022-11-25 19:50:31 |
| P0013 | Mie Ayam Jamur    | Makanan   | NULL        | 20000 |       50 | 2022-11-25 19:50:31 |
| P0014 | Bakso Telor       | Makanan   | NULL        | 20000 |      150 | 2022-11-25 19:50:31 |
| P0015 | Bakso Jandg       | Makanan   | NULL        | 25000 |      300 | 2022-11-25 19:50:31 |
+-------+-------------------+-----------+-------------+-------+----------+---------------------+
13 rows in set (0.001 sec)

maka yang muncul hanya description yang null saja ya







- between operator

betweeen
not between

kadang kita ingin mencari data yang >= dan <= sekaligus
atau istilahnya diantara

sebenarnya kalian bisa saja menggunakan operator logika and
tapi akan lebih mudah jika menggunakan between operator


nah misalkan kalian ingin mencari product yang harganya itu antara 10000 dan 2000
jadi bisa menggunakan between

select * from products where price between 10000 and 20000; 


MariaDB [belajar_mysql]> select * from products where price between 10000 and 20000;
+-------+---------------------+-----------+--------------------------------+-------+----------+---------------------+
| id    | name                | category  | description                    | price | quantity | created_at          |
+-------+---------------------+-----------+--------------------------------+-------+----------+---------------------+
| P0001 | Mie Ayam Original   | Makanan   | NULL                           | 15000 |      100 | 2022-11-01 15:03:43 |
| P0002 | Mie Ayam Bakso Tahu | NULL      | Mie Ayam Original + Bakso Tahu | 20000 |      100 | 2022-11-01 15:03:54 |
| P0003 | Mie Ayam Ceker      | Makanan   | Mie Ayam + Ceker               | 20000 |      100 | 2022-11-01 15:04:01 |
| P0005 | Mie Ayam Yamin      | NULL      | NULL                           | 15000 |      100 | 2022-11-01 15:04:01 |
| P0007 | Es Jeruk            | Minuman   | NULL                           | 10000 |      300 | 2022-11-25 19:49:45 |
| P0008 | Es Campur           | Minuman   | NULL                           | 15000 |      580 | 2022-11-25 19:50:31 |
| P0011 | Kecinik Udang       | lain-Lain | NULL                           | 10000 |      300 | 2022-11-25 19:50:31 |
| P0013 | Mie Ayam Jamur      | Makanan   | NULL                           | 20000 |       50 | 2022-11-25 19:50:31 |
| P0014 | Bakso Telor         | Makanan   | NULL                           | 20000 |      150 | 2022-11-25 19:50:31 |
+-------+---------------------+-----------+--------------------------------+-------+----------+---------------------+
9 rows in set (0.172 sec)


jadi data yang 10000 atau 20000 akan tetap masuk ya








- in operator

in 
not in

operator in adalah operator yang digunakan untuk melakukan pencarian sebuah column dengan beberapa nilai
jadi misalkan kita ingin mencari products dengan category makanan atau minuman

maka kita bisa menggunakan operator in
kalo kalian tidak menggunakan in maka bisa menggunakan operator or 
tapi itu akan lebih ribet

kita coba



select * from products where category in ('makanan','minuman');



MariaDB [belajar_mysql]> select * from products where category in ('makanan','minuman');
+-------+-------------------+----------+------------------+-------+----------+---------------------+
| id    | name              | category | description      | price | quantity | created_at          |
+-------+-------------------+----------+------------------+-------+----------+---------------------+
| P0001 | Mie Ayam Original | Makanan  | NULL             | 15000 |      100 | 2022-11-01 15:03:43 |
| P0003 | Mie Ayam Ceker    | Makanan  | Mie Ayam + Ceker | 20000 |      100 | 2022-11-01 15:04:01 |
| P0006 | Bakso Rusuk       | Makanan  | NULL             | 25000 |      200 | 2022-11-25 19:49:45 |
| P0007 | Es Jeruk          | Minuman  | NULL             | 10000 |      300 | 2022-11-25 19:49:45 |
| P0008 | Es Campur         | Minuman  | NULL             | 15000 |      580 | 2022-11-25 19:50:31 |
| P0009 | Es Teh Manis      | Minuman  | NULL             |  5000 |      400 | 2022-11-25 19:50:31 |
| P0013 | Mie Ayam Jamur    | Makanan  | NULL             | 20000 |       50 | 2022-11-25 19:50:31 |
| P0014 | Bakso Telor       | Makanan  | NULL             | 20000 |      150 | 2022-11-25 19:50:31 |
| P0015 | Bakso Jandg       | Makanan  | NULL             | 25000 |      300 | 2022-11-25 19:50:31 |
+-------+-------------------+----------+------------------+-------+----------+---------------------+
9 rows in set (0.001 sec)

nah jadi yang akan tampil adalah yang categorynya itu makanan atau minuman




jadi itu lah macam amcam where operator 
mudah mudahan kalian paham








-----------------------------------

source programmer zaman now mysql

-----------------


*/