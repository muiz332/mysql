// delete data


/*


sekarang kita akan membahas mengenai delete data didalam mysql
setelah kita tahu cara menambah,mengubah,dan menampilkan data 

kini saatnya kita belajar mengenai delete data

nah untuk menghapus data kita bisa menggunakan perintah DELETE
perintah delete ini sama seperti update, kita harus memberi tahu data mana yang akan
kita hapus

jika kita lupa memberitahu data mana yang akan dihapus, bisa bisa semua data kita 
akan ikut terhapus

jadi kita beritahu dengan menggunakan where clause ya





- Menghapus data

untuk menghapus data kita bisa tulis perintahnya seperti ini

delete from products where id = 'P0009'

bacanya 
saya akan menghapus data dari table products dimana idnya itu sama dengan P0009

sebelum itu kita akan menbahkan data dulu untuk simulasi menghapus data


insert into products (id,name,price,quantity) 
values ('P0009','Mie Ayam Original',15000,100);



MariaDB [belajar_mysql]> select * from products;
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
| id    | name                | category | description                    | price | quantity | created_at          |
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
| P0001 | Mie Ayam Original   | Makanan  | NULL                           | 15000 |      100 | 2022-11-01 15:03:43 |
| P0002 | Mie Ayam Bakso Tahu | NULL     | Mie Ayam Original + Bakso Tahu | 20000 |      100 | 2022-11-01 15:03:54 |
| P0003 | Mie Ayam Ceker      | Makanan  | Mie Ayam + Ceker               | 20000 |      100 | 2022-11-01 15:04:01 |
| P0004 | Mie Ayam Spesial    | NULL     | NULL                           | 30000 |      100 | 2022-11-01 15:04:01 |
| P0005 | Mie Ayam Yamin      | NULL     | NULL                           | 15000 |      100 | 2022-11-01 15:04:01 |
| P0009 | Mie Ayam Original   | NULL     | NULL                           | 15000 |      100 | 2022-11-03 19:00:22 |
+-------+---------------------+----------+--------------------------------+-------+----------+---------------------+
6 rows in set (0.000 sec)


datanya sudah ada, nah sekarang kita hapus

delete from products where id = 'P0009';


MariaDB [belajar_mysql]> select * from products;
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

kalo kita lihat datanya sudah terhapus ya
jadi sangat sederhana untuk menghapus data

kita tinggal menggunakan perintah sql delete 

jika wherenya itu adalah column price yang harganya 20000
maka 2 data dengan id P0002 dan P0003 akan ikut terhapus

jadi hati hati saat kalian menghapus data
mudah mudahan kalian paham









-----------------------------------

source programmer zaman now mysql

-----------------














*/