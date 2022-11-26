// order by clause


/*

sekarang kita akan bahas mengenai order by clause
ketika kalian ingin mengurutkan sesuatu berdasarkan column tertentu
tapi kita bisa mengurutkan lebih dari satu column jika column pertama itu ada data
yang sama, maka akan diurutkan berbesarkan column kedua


kita coba


select * from products order by price asc, id desc;


MariaDB [belajar_mysql]> select * from products order by price asc, id desc;
+-------+---------------------+-----------+--------------------------------+-------+----------+---------------------+
| id    | name                | category  | description                    | price | quantity | created_at          |
+-------+---------------------+-----------+--------------------------------+-------+----------+---------------------+
| P0010 | Kerupuk             | lain-Lain | NULL                           |  2500 |     1000 | 2022-11-25 19:50:31 |
| P0012 | Es Krim             | lain-Lain | NULL                           |  5000 |      200 | 2022-11-25 19:50:31 |
| P0009 | Es Teh Manis        | Minuman   | NULL                           |  5000 |      400 | 2022-11-25 19:50:31 |
| P0011 | Kecinik Udang       | lain-Lain | NULL                           | 10000 |      300 | 2022-11-25 19:50:31 |
| P0007 | Es Jeruk            | Minuman   | NULL                           | 10000 |      300 | 2022-11-25 19:49:45 |
| P0008 | Es Campur           | Minuman   | NULL                           | 15000 |      580 | 2022-11-25 19:50:31 |
| P0005 | Mie Ayam Yamin      | NULL      | NULL                           | 15000 |      100 | 2022-11-01 15:04:01 |
| P0001 | Mie Ayam Original   | Makanan   | NULL                           | 15000 |      100 | 2022-11-01 15:03:43 |
| P0014 | Bakso Telor         | Makanan   | NULL                           | 20000 |      150 | 2022-11-25 19:50:31 |
| P0013 | Mie Ayam Jamur      | Makanan   | NULL                           | 20000 |       50 | 2022-11-25 19:50:31 |
| P0003 | Mie Ayam Ceker      | Makanan   | Mie Ayam + Ceker               | 20000 |      100 | 2022-11-01 15:04:01 |
| P0002 | Mie Ayam Bakso Tahu | NULL      | Mie Ayam Original + Bakso Tahu | 20000 |      100 | 2022-11-01 15:03:54 |
| P0015 | Bakso Jandg         | Makanan   | NULL                           | 25000 |      300 | 2022-11-25 19:50:31 |
| P0006 | Bakso Rusuk         | Makanan   | NULL                           | 25000 |      200 | 2022-11-25 19:49:45 |
| P0004 | Mie Ayam Spesial    | NULL      | NULL                           | 30000 |      100 | 2022-11-01 15:04:01 |
+-------+---------------------+-----------+--------------------------------+-------+----------+---------------------+
15 rows in set (0.001 sec)


maka jika column price itu ada harga yang sama, maka akan diurutkan sesuai dengan 
column id dengan urutan desc atau dari besar ke kecil


jika kalian tidak menuliskan ascending atau descending maka
defaultnya adalah ascending


jadi ini cara mengurutkan data didalam mysql
mudah mudahan kalian paham














-----------------------------------

source programmer zaman now mysql

-----------------






*/