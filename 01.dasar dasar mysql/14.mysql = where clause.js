// where cluse

/*

saat kita mengambil data menggunakan select itu ada kalanya kita ingin mencari data
yang spesifik

jadi misalnya kita ingin mengambil barang dengan harganya 1jt, atau kita ingin mengambil 
barang yang stoknya kosong

hal ini kita bisa lakukan dengan menggunakan perintah where yang kita tempatkan 
setelah perintah select 



- Mencari data spesifik

misalkan kita ingin mencari barang dengan harga 15000 ditable products

table products

+-------+---------------------+--------------------------------+-------+----------+---------------------+
| id    | name                | description                    | price | quantity | created_at          |
+-------+---------------------+--------------------------------+-------+----------+---------------------+
| P0001 | Mie Ayam Original   | NULL                           | 15000 |      100 | 2022-11-01 15:03:43 |
| P0002 | Mie Ayam Bakso Tahu | Mie Ayam Original + Bakso Tahu | 20000 |      100 | 2022-11-01 15:03:54 |
| P0003 | Mie Ayam Ceker      | NULL                           | 20000 |      100 | 2022-11-01 15:04:01 |
| P0004 | Mie Ayam Spesial    | NULL                           | 25000 |      100 | 2022-11-01 15:04:01 |
| P0005 | Mie Ayam Yamin      | NULL                           | 15000 |      100 | 2022-11-01 15:04:01 |
+-------+---------------------+--------------------------------+-------+----------+---------------------+


jadi kita bisa tulis seperti ini

select * from products where price = 15000;

jadi ini bacanya
tampilkan semua column dari table products dimana column price itu sama dengan 15000

kita jalankan 


MariaDB [belajar_mysql]> select * from products where price = 15000;
+-------+-------------------+-------------+-------+----------+---------------------+
| id    | name              | description | price | quantity | created_at          |
+-------+-------------------+-------------+-------+----------+---------------------+
| P0001 | Mie Ayam Original | NULL        | 15000 |      100 | 2022-11-01 15:03:43 |
| P0005 | Mie Ayam Yamin    | NULL        | 15000 |      100 | 2022-11-01 15:04:01 |
+-------+-------------------+-------------+-------+----------+---------------------+
2 rows in set (0.001 sec)

nah maka yang akan tampil hanya column price yang harganya 15000 saja

misalkan kita ingin mencari name yang namanya Mie Ayam Yasmin

select * from products where name = 'mie ayam yamin';

kalo kita jalankan 

+-------+----------------+-------------+-------+----------+---------------------+
| id    | name           | description | price | quantity | created_at          |
+-------+----------------+-------------+-------+----------+---------------------+
| P0005 | Mie Ayam Yamin | NULL        | 15000 |      100 | 2022-11-01 15:04:01 |
+-------+----------------+-------------+-------+----------+---------------------+
1 row in set (0.000 sec)


nah kenapa bisa keluar padahal datanya itu ada yang huruf besar dan huruf kecil
sedangkan diwherenya kita memasukkan huruf kecil saja

didalam mysql itu defaultnya tidak terpengaruh huruf besar maupun huruf
kecil

jadi kalian bebas menuliskan huruf kecil atau huruf besar




- Operator where clause

adapun beberapa operator dari where clause 
kalian bisa baca dilink berikut ini

https://www.w3schools.com/sql/sql_where.asp












-----------------------------------

source programmer zaman now mysql

-----------------
















*/