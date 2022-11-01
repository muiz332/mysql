// insert data


/*

setelah kalian memahami tentang table sekarang kita akan belajar bagaimana memasukkan data
kedalam sebuah table yang sudah kita buat

sebelum kita memasukkan sebuah table kita harus buat dulu ya tablenya
ketika kita memasukkan data kedalam sebuah table kita harus menuliskan column yang 
mau kita masukkan datanya

jika kita tidak menuliskan columnya maka column yang tidak tertulis akan mengisinya
dengan nilai default

jadi kita kalian memiliki 10 column dan kalian hanya mengisinya 5 column saja
maka sisanya itu akan memiliki nilai default 

entah itu nilai defaultnya null atau nilai default yang kalian atur saat
pembuatan tablenya


nah untuk memasukkan data kita bisa menggunakna perintah insert
sebelumnya kita bikin dulu table produk dengan struktur seperti ini


create table produk (
    id varchar(10) not null,
    name varchar(100) not null,
    description text,
    price int unsigned not null,
    quantity int unsigned not null default 0,
    created_at timestamp not null default current_timestamp
);

maka struktur tablenya akan seperti ini


MariaDB [belajar_mysql]> desc produk;
+-------------+------------------+------+-----+---------------------+-------+
| Field       | Type             | Null | Key | Default             | Extra |
+-------------+------------------+------+-----+---------------------+-------+
| id          | varchar(10)      | NO   |     | NULL                |       |
| name        | varchar(100)     | NO   |     | NULL                |       |
| description | text             | YES  |     | NULL                |       |
| price       | int(10) unsigned | NO   |     | NULL                |       |
| quantity    | int(10) unsigned | NO   |     | 0                   |       |
| created_at  | timestamp        | NO   |     | current_timestamp() |       |
+-------------+------------------+------+-----+---------------------+-------+
6 rows in set (0.012 sec)



nah sekarang kita akan mencoba memasukkan data kedalam table produk



- Memasukkan data


untuk memasukkan data kalian tulis perintah 

insert into table_name (column1,column2,..n) values ('coba','insert',..n)

atau jika kalian ingin menambah data kesemua column kalian bisa tulis

insert into table_name value('coba','insert',..)

akan tetapi kalian harus memperhatikan urutan dari columnya ya
jangan sampai terbalik saat menambahkan datanya

untuk cara yang pertama tadi kalian tidak perlu memerhatikan urutan dari columnya
cukup tambahkan sesuai dengan urutkan column yang kalian masukkan didalam 
kurung (column1,column2,..n)



kita coba


insert into produk (id,name,price,quantity) values ('P0001','Mie Ayam Original',15000,100);

jadi bacanya gini
tambahkan kedalam table produk dengan column () dengan nilai ()

kita jalankan 

jika kalian ingin melihat hasilnya kalian tinggal tulis

select * from produk;

maka akan tampil seperti ini


MariaDB [belajar_mysql]> select * from produk;
+-------+-------------------+-------------+-------+----------+---------------------+
| id    | name              | description | price | quantity | created_at          |
+-------+-------------------+-------------+-------+----------+---------------------+
| P0001 | Mie Ayam Original | NULL        | 15000 |      100 | 2022-11-01 14:43:01 |
+-------+-------------------+-------------+-------+----------+---------------------+
1 row in set (0.001 sec)


nah kita coba insert lagi 




insert into produk (id,name,description,price,quantity) 
values ('P0002','Mie Ayam Bakso Tahu','Mie Ayam Original + Bakso Tahu',20000,100);

kita lihat hasilnya


MariaDB [belajar_mysql]> select * from produk;
+-------+---------------------+--------------------------------+-------+----------+---------------------+
| id    | name                | description                    | price | quantity | created_at          |
+-------+---------------------+--------------------------------+-------+----------+---------------------+
| P0001 | Mie Ayam Original   | NULL                           | 15000 |      100 | 2022-11-01 14:43:01 |
| P0002 | Mie Ayam Bakso Tahu | Mie Ayam Original + Bakso Tahu | 20000 |      100 | 2022-11-01 14:47:55 |
+-------+---------------------+--------------------------------+-------+----------+---------------------+
2 rows in set (0.000 sec)






- Memasukkan banyak data


nah gimana kalo kalian ingin memasukkan datanya dalam jumlah yang
banyak ? 

jadi caranya seperti ini

insert into produk (id,name,price,quantity)
values ('P0003','Mie Ayam Ceker',20000,100),
('P0004','Mie Ayam Spesial',25000,100),
('P0005','Mie Ayam Yamin',15000,100);


jadi kalian tingal tambahkan koma setelah data pertama dan seterusnya
kita coba jalankan


MariaDB [belajar_mysql]> select * from produk;
+-------+---------------------+--------------------------------+-------+----------+---------------------+
| id    | name                | description                    | price | quantity | created_at          |
+-------+---------------------+--------------------------------+-------+----------+---------------------+
| P0001 | Mie Ayam Original   | NULL                           | 15000 |      100 | 2022-11-01 14:43:01 |
| P0002 | Mie Ayam Bakso Tahu | Mie Ayam Original + Bakso Tahu | 20000 |      100 | 2022-11-01 14:47:55 |
| P0003 | Mie Ayam Ceker      | NULL                           | 20000 |      100 | 2022-11-01 14:53:34 |
| P0004 | Mie Ayam Spesial    | NULL                           | 25000 |      100 | 2022-11-01 14:53:34 |
| P0005 | Mie Ayam Yamin      | NULL                           | 15000 |      100 | 2022-11-01 14:53:34 |
+-------+---------------------+--------------------------------+-------+----------+---------------------+
5 rows in set (0.000 sec)



jadi kalo kalian ingin mencoba menambahkan data dalam jumlah yang banyak silahkan
tapi pastikan idnya selalu uniq

nah kenapa harus uniq? itu akan dijelaskan dimateri yang akan datang


jadi seperti itu bagaimana cara kita menambahkan data didalam
mysql dengan menggunakan perintah insert into

mudah mudahan kalian paham














-----------------------------------

source programmer zaman now mysql

-----------------














*/