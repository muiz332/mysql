// limit clause


/*



mengambil semua data didalam database mysql bukan lah hal yang bijak
apa lagi jika datanya sudah banyak 


nah biasanya kita gunakan saat melakukan paging atau lazy load web
kita bisa batasi data yang diambil dengan menggunakan limit

selain membatasi data, kita juga bisa melakukan skip data yang tidak
ingin kita lihat





- membatasi jumlah data yang dikembalikan

misalkan kita ingin membatasi data yang kita ambil sebanyak 2 data

select * from products where price > 10000 order by price limit 2;



MariaDB [belajar_mysql]> select * from products where price > 10000 order by price limit 2;
+-------+-------------------+----------+-------------+-------+----------+---------------------+
| id    | name              | category | description | price | quantity | created_at          |
+-------+-------------------+----------+-------------+-------+----------+---------------------+
| P0001 | Mie Ayam Original | Makanan  | NULL        | 15000 |      100 | 2022-11-01 15:03:43 |
| P0005 | Mie Ayam Yamin    | NULL     | NULL        | 15000 |      100 | 2022-11-01 15:04:01 |
+-------+-------------------+----------+-------------+-------+----------+---------------------+
2 rows in set (0.007 sec)

oke jadi hanya 2 data yang kita dapatkan 






- melakukan skip data

nah misalkan kita ingin melakukan skip data 

misalnya kalian membuat halaman 1 dengan data 1 - 5
halaman kedua harusnya 6 - 10

kita coba


select * from products limit 2,5;


MariaDB [belajar_mysql]> select * from products limit 2,5;
+-------+------------------+----------+------------------+-------+----------+---------------------+
| id    | name             | category | description      | price | quantity | created_at          |
+-------+------------------+----------+------------------+-------+----------+---------------------+
| P0003 | Mie Ayam Ceker   | Makanan  | Mie Ayam + Ceker | 20000 |      100 | 2022-11-01 15:04:01 |
| P0004 | Mie Ayam Spesial | NULL     | NULL             | 30000 |      100 | 2022-11-01 15:04:01 |
| P0005 | Mie Ayam Yamin   | NULL     | NULL             | 15000 |      100 | 2022-11-01 15:04:01 |
| P0006 | Bakso Rusuk      | Makanan  | NULL             | 25000 |      200 | 2022-11-25 19:49:45 |
| P0007 | Es Jeruk         | Minuman  | NULL             | 10000 |      300 | 2022-11-25 19:49:45 |
+-------+------------------+----------+------------------+-------+----------+---------------------+
5 rows in set (0.000 sec)


nah maka yang akan diambil adalah mulai dari data ke 3 sampai berjumlah 5 data


jadi sebenarnya yang dilakukan limit adalah
mencari data milai dari atas sampai skip tetentu

semakin besar skipnya maka mysql akan semakin lambat
agar tidak lambat kita jangan melakukan skip

kita bisa pakai limit saja yang digabungkan dengan where clause



jadi seperti itu ya cara melakukan limit pada mysql
mudah mudahan kalian paham

























*/