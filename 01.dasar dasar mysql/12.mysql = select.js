// select


/*


untuk mengambil data didalam table kita bisa menggunakan perintah select
select bisa digunakan untuk mengambil semua column yang ada didalam table

atau juga bisa mengambil beberapa column sesuai yang kita inginkan saja
jika kita ingin menampilkan semua column kita bisa gunakan tanda bintang *

jika kalian hanya ingin mengambil column yang diinginkan maka
kalian tulis nama columnya jika lebih dari satu pisahkan dengan koma





- Mengambil data

select * from products;

jadi bacanya gini

pilih semua data dari table produk;

kalo kita jalankan maka hasilnya seperti ini


MariaDB [belajar_mysql]> select * from products;
+-------+---------------------+--------------------------------+-------+----------+---------------------+
| id    | name                | description                    | price | quantity | created_at          |
+-------+---------------------+--------------------------------+-------+----------+---------------------+
| P0001 | Mie Ayam Original   | NULL                           | 15000 |      100 | 2022-11-01 15:03:43 |
| P0002 | Mie Ayam Bakso Tahu | Mie Ayam Original + Bakso Tahu | 20000 |      100 | 2022-11-01 15:03:54 |
| P0003 | Mie Ayam Ceker      | NULL                           | 20000 |      100 | 2022-11-01 15:04:01 |
| P0004 | Mie Ayam Spesial    | NULL                           | 25000 |      100 | 2022-11-01 15:04:01 |
| P0005 | Mie Ayam Yamin      | NULL                           | 15000 |      100 | 2022-11-01 15:04:01 |
+-------+---------------------+--------------------------------+-------+----------+---------------------+
5 rows in set (0.001 sec)




- Mengambil beberapa data

jika kalian ingin mengambil data dari beberapa column saja
kalian tinggal tuliskan nama columnya, jika lebih dari satu
maka pisahkan dengan koma

select name,price,quantity from products;


maka hasilnya akan seperti ini

MariaDB [belajar_mysql]> select name,price,quantity from products;
+---------------------+-------+----------+
| name                | price | quantity |
+---------------------+-------+----------+
| Mie Ayam Original   | 15000 |      100 |
| Mie Ayam Bakso Tahu | 20000 |      100 |
| Mie Ayam Ceker      | 20000 |      100 |
| Mie Ayam Spesial    | 25000 |      100 |
| Mie Ayam Yamin      | 15000 |      100 |
+---------------------+-------+----------+
5 rows in set (0.001 sec)

atau kalian juga bisa mengubah urutannya

select name,id,quantity,price from products;



MariaDB [belajar_mysql]> select name,id,quantity,price from products;
+---------------------+-------+----------+-------+
| name                | id    | quantity | price |
+---------------------+-------+----------+-------+
| Mie Ayam Original   | P0001 |      100 | 15000 |
| Mie Ayam Bakso Tahu | P0002 |      100 | 20000 |
| Mie Ayam Ceker      | P0003 |      100 | 20000 |
| Mie Ayam Spesial    | P0004 |      100 | 25000 |
| Mie Ayam Yamin      | P0005 |      100 | 15000 |
+---------------------+-------+----------+-------+
5 rows in set (0.001 sec)



jadi seperti itu ya cara menggunakan dari select
mudah mudahan kalian paham










-----------------------------------

source programmer zaman now mysql

-----------------






































*/