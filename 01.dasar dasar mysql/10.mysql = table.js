// table



/*

sekarang kita akan bahas mengenai table, didalam mysql data akan disimpan kedalam sebuah table
jadi tiap table itu akan menyimpan satu jenis data

misalkan ketika kita membuat aplikasi toko online maka akan ada table produk untuk
menyimpan data produk, table pelanggan, dan lain lain

jadi satu table akan menyimpan satu jenis data 
nah sebelum kita menyimpan data kedalam sebuah table, kita harus membuat dulu tablenya

dan tiap table yang kita buat wajib menentukan apa saja columnnya
dan apa tipe datanya pada tiap column

kita juga bisa mangubah table yang sudah kita buat, seperti ingin menambahkan sebuah column baru
atau mengganti nama column atau menghapus nama column 

nah perintah seperti mengubah table itu disebut dengan DDL


- DDL (Data Definition language)

DDL adalah sub perintah bahasa SQL yang mempunyai peran dalam hal membangun kerangka suatu database. 
Adapun yang dimaksud ialah tabel dan database itu sendiri. Makanya dalam DDL terdapat 3 perintah yang 
sangat penting yaitu Create, Alter, Drop

contohnya untuk create itu seperti ini

- Create trigger untuk membuat reaksi tertentu atau trigger pada database saat Anda memasukkan perintah lain
- Create table untuk membuat tabel yang baru
- Create Procedure untuk membuat prosedur yang baru
- Create index untuk membuat index yang baru
- Create function untuk membuat fungsi yang baru
- Create database untuk membuat database yang baru

- DML (Data Manipulation Language)

DML atau Data Manipulation Language ialah sub perintah bahasa SQL yang dapat dimanfaatkan ketika memanipulasi data di dalam database 
yang sebelumnya sudah dibuat. DML ini bisa digunakan setelah Anda menjalankan perintah DDL. Dalam DML ini juga ada sejumlah 
perintah penting yaitu:

- Delete untuk menghapus data yang terdapat di dalam tabel pada database
- Update untuk mengganti data yang terdapat dalam tabel pada database
- Insert untuk memasukkan data-data dalam tabel pada database



- DCL (Data Control Language)

DCL atau Data Control Language, ini merupakan sub bahasa SQL yang mempunyai fungsi utama untuk mengontrol data serta server databasenya. 
Misalnya hak akses dan manipulasi user. Dengan kata lain, apabila Anda telah memiliki user kemudian ingin mengatur hak akses dari 
masing-masing user tersebut, maka Anda perlu memahami DCL ini
contoh DCL

- Grant digunakan untuk memberikan izin pada pengguna atau user untuk bisa mengakses database
- Revoke digunakan untuk membatalkan izin pengguna atau user dalam mengakses database
- Commit digunakan untuk menetapkan penyimpanan dalam database
- Roolback digunakan untuk membatalkan penyimpanan dalam database




nah tapi sebelum kalian belajar cara membuat table, kalian harus mengerti dulu didalam mysql itu 
ada yang namanya storage engines



- Storage engines

jadi mysql memiliki banyak cara untuk mengelola data yang ada didalam database kita 
nah cara pengelolannya itu tergantung pada pemilihan storage enginenya

nah saat ini yang paling popular adalah InnoDB  
untuk melihat storage engine apa saja yang disediakan oleh mysql kalian bisa
menuliskan perintah 

show engines;

kalo kalian jalankan maka hasilnya akan seperti ini

MariaDB [belajar_mysql]> show engines;
+--------------------+---------+-------------------------------------------------------------------------------------------------+--------------+------+------------+
| Engine             | Support | Comment                                                                                         | Transactions | XA   | Savepoints |
+--------------------+---------+-------------------------------------------------------------------------------------------------+--------------+------+------------+
| CSV                | YES     | Stores tables as CSV files                                                                      | NO           | NO   | NO         |
| MRG_MyISAM         | YES     | Collection of identical MyISAM tables                                                           | NO           | NO   | NO         |
| MEMORY             | YES     | Hash based, stored in memory, useful for temporary tables                                       | NO           | NO   | NO         |
| Aria               | YES     | Crash-safe tables with MyISAM heritage. Used for internal temporary tables and privilege tables | NO           | NO   | NO         |
| MyISAM             | YES     | Non-transactional engine with good performance and small data footprint                         | NO           | NO   | NO         |
| SEQUENCE           | YES     | Generated tables filled with sequential values                                                  | YES          | NO   | YES        |
| InnoDB             | DEFAULT | Supports transactions, row-level locking, foreign keys and encryption for tables                | YES          | YES  | YES        |
| PERFORMANCE_SCHEMA | YES     | Performance Schema                                                                              | NO           | NO   | NO         |
+--------------------+---------+-------------------------------------------------------------------------------------------------+--------------+------+------------+
8 rows in set (0.001 sec)

karen saya menggunakan mariaDB mungkin hasilnya akan berbeda

jadi yang saat ini direkomendasikan untuk dipakai adalah InnoDB, karena si InnoDB memiliki
fitur yang lengkap 

jadi nanti secara otomatis mysqlnya akan memilih InnoDB sebagai storage engine kalian
karena itu default dari simysql




- Melihat table

nah selanjutnya gimana kalo kita ingin melihat table didalam database kita
jadi kalian harus use dulu ya databasenya

lalu kalian tuliskan show tables;


- Membuat table

cara membuat table didalam mysql itu cukup sederhana kalian tinggal tuliskan perintah ini
dan mysql itu tidak case sensitif artinya kalian tulis huruf besar atau huruf kecil itu 
tidak masalah

untuk membuat table kalian tuliskan

create table barang (
    kode int,
    nama varchar(100),
    harga int,
    jumlah int
) engine = InnoDB;


kalian bisa tuliskan enginenya atau tidak karena kalo tidak kalian tuliskan itu tidak masalah ya mysql 
akan secara default menggunakan InnoDB sebagai storage enginenya

kalo kalian jalankan dan kalian tulis
show tables;

maka hasilnya seperti ini

MariaDB [belajar_mysql]> show tables;
+-------------------------+
| Tables_in_belajar_mysql |
+-------------------------+
| barang                  |
+-------------------------+
1 row in set (0.001 sec)

akan ada table baru dengan nama barang




- Melihat struktur table

jika kalian ingin melihat struktur table, mulai dari nama columnya apa saja, dan type datanya
apa saja, kalian bisa tuliskan perintah ini

desc barang; 
atau
describe barang;

maka akan tampil

MariaDB [belajar_mysql]>  desc barang;
+--------+--------------+------+-----+---------+-------+
| Field  | Type         | Null | Key | Default | Extra |
+--------+--------------+------+-----+---------+-------+
| kode   | int(11)      | YES  |     | NULL    |       |
| nama   | varchar(100) | YES  |     | NULL    |       |
| harga  | int(11)      | YES  |     | NULL    |       |
| jumlah | int(11)      | YES  |     | NULL    |       |
+--------+--------------+------+-----+---------+-------+
4 rows in set (0.085 sec)

untuk null default itu akan kita bahas nanti ya
jika kalian ingin melihat code pembuat dari tablenya kalian tinggal tulis

show create table barang;

maka akan tampil

barang | CREATE TABLE `barang` (
  `kode` int(11) DEFAULT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `jumlah` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 |


itu ada code yang kita tulis untuk membuat barang
jika kalian menambahkan type data integer pada column 

kalian cukup tuliskan int saja tidak perlu membatasinya
int(6) tidak perlu seperti itu cukup tuliskan int saja 




- Mengubah table

jadi kalian bisa mengubah tablenya seperti menambah,mengubah,mengganti nama,memodifikasi column 
didalam table

caranya kalian tinggal tulis perintah ini

alter table barang
add column nama_column text,
drop column nama_column,
rename column nama_column to nama-baru,
modify nama_column varchar(100) after jumlah,
modify nama_column varchar(100) first;


untuk menambah column dan memodifikasi column kalian harus menambahkan 
type data dari column tersebut

jadi kalo kalian ingin menambahkan column tinggal tulis

alter table barang
add column nama_column text;


kita coba


- Menambahkan column


alter table barang
add column deskripsi text;


kalo kalian jalankan dan kalian lihat struktur tablenya
maka akan seperti ini


MariaDB [belajar_mysql]> desc barang;
+-----------+--------------+------+-----+---------+-------+
| Field     | Type         | Null | Key | Default | Extra |
+-----------+--------------+------+-----+---------+-------+
| kode      | int(11)      | YES  |     | NULL    |       |
| nama      | varchar(100) | YES  |     | NULL    |       |
| harga     | int(11)      | YES  |     | NULL    |       |
| jumlah    | int(11)      | YES  |     | NULL    |       |
| deskripsi | text         | YES  |     | NULL    |       |
+-----------+--------------+------+-----+---------+-------+
5 rows in set (0.010 sec)



- Menghapus column 

kita tambahkan dulu columnnya

alter table barang
add column salah text;

dan kita harus columnya

alter table barang 
drop column salah;


- Memodifikasi table

misalkan kalian ingin mengubah column nama dari varchar(100) menjadi
varchar(200)

kalian bisa tulis 

alter table barang
modify column nama varchar(200);


kalo kita jalankan 


MariaDB [belajar_mysql]> desc barang;
+-----------+--------------+------+-----+---------+-------+
| Field     | Type         | Null | Key | Default | Extra |
+-----------+--------------+------+-----+---------+-------+
| kode      | int(11)      | YES  |     | NULL    |       |
| nama      | varchar(200) | YES  |     | NULL    |       |
| harga     | int(11)      | YES  |     | NULL    |       |
| jumlah    | int(11)      | YES  |     | NULL    |       |
| deskripsi | text         | YES  |     | NULL    |       |
+-----------+--------------+------+-----+---------+-------+
5 rows in set (0.015 sec)

sudah barubah ya menjadi varchar(200)


jika kalian ingin menempatkan sebuah column kalian bisa tambahkan 
after, atau first untuk menempatkannya didepan

untuk before itu tidak ada ya

alter table barang
modify column nama varchar(200) first;

MariaDB [belajar_mysql]> desc barang;
+-----------+--------------+------+-----+---------+-------+
| Field     | Type         | Null | Key | Default | Extra |
+-----------+--------------+------+-----+---------+-------+
| nama      | varchar(200) | YES  |     | NULL    |       |
| kode      | int(11)      | YES  |     | NULL    |       |
| harga     | int(11)      | YES  |     | NULL    |       |
| jumlah    | int(11)      | YES  |     | NULL    |       |
| deskripsi | text         | YES  |     | NULL    |       |
+-----------+--------------+------+-----+---------+-------+
5 rows in set (0.010 sec)

maka dia akan didepan




- Null value

nah sebelumnya kalian lihat ya ada null dan ada yes, maksutnya apa sih?
jadi null itu adalah sebuah value yang kita masukkan kedalam sebuah column 
yang tidak ada datanya

jadi kalo kalian memasukkan data ditablenya, dan kalian hanya memasukkan kode dan nama saja
maka yang lainnya akan terisi dengan nilai null

jadi harga jumlah dan deskirpsi akan bernilai null

nah secara default saat kita membuat column, column tersebut akan bernilai null,
jika kita tidak menerima nilai null, kita bisa menambahkan not null pada saat
membuat tablenya


create table barang (
    kode int not null,
    nama varchar(100),
    harga int,
    jumlah int,
) engine = InnoDB;

jadi tinggal kalian tambahkan not null setelah type datanya

jika kalian sudah terlanjut membuat table kalian tinggal modify table tersebut

alter table barang
modify column kode int not null;


MariaDB [belajar_mysql]> desc barang;
+-----------+--------------+------+-----+---------+-------+
| Field     | Type         | Null | Key | Default | Extra |
+-----------+--------------+------+-----+---------+-------+
| nama      | varchar(200) | YES  |     | NULL    |       |
| kode      | int(11)      | NO   |     | NULL    |       |
| harga     | int(11)      | YES  |     | NULL    |       |
| jumlah    | int(11)      | YES  |     | NULL    |       |
| deskripsi | text         | YES  |     | NULL    |       |
+-----------+--------------+------+-----+---------+-------+
5 rows in set (0.010 sec)

maka kode akan not null, tidak menerima value null


lalu kalian ubah nama menjadi not null

alter table barang
modify column nama varchar(200) not null;

+-----------+--------------+------+-----+---------+-------+
| Field     | Type         | Null | Key | Default | Extra |
+-----------+--------------+------+-----+---------+-------+
| nama      | varchar(200) | NO   |     | NULL    |       |
| kode      | int(11)      | NO   |     | NULL    |       |
| harga     | int(11)      | YES  |     | NULL    |       |
| jumlah    | int(11)      | YES  |     | NULL    |       |
| deskripsi | text         | YES  |     | NULL    |       |
+-----------+--------------+------+-----+---------+-------+
5 rows in set (0.013 sec)


jadi kalo kalian show create table barang;

akan muncul seperti ini

| barang | CREATE TABLE `barang` (
  `nama` varchar(200) NOT NULL,
  `kode` int(11) NOT NULL,
  `harga` int(11) DEFAULT NULL,
  `jumlah` int(11) DEFAULT NULL,
  `deskripsi` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 |


jadi ada not nullnya ya




- Default value

jadi jika kalian ingin membuat default value dari sebuah column
yang artinya nanti kalian tidak perlu mengisi value didalam column
tersebut kalian bisa tambahkan default value


dan column yang tidak kita atur default valuenya maka default valuenya
adalah null


jadi contohnya kalian ingin kalo misalkan column nama tidak disi maka default valuenya
adalah string kosong, atau kalo harga nilainya adalah 0 

nah itu kita bisa menggunakan default value


nah khusus untuk type data timestamp atau datetime, jika kita ingin menggunakan 
default value kalian tuliskan current_timestamp 

maka jika kita tidak mengisi valuenya maka isi dari column tersebut adalah
waktu saat ini

nah sekarang kita ubah column harga dan jumlah menjadi not null dan default 0

saat membuat tablenya

create table barang (
    kode int not null,
    nama varchar(100) not null,
    harga int not null default 0,
    jumlah int not null default 0,
) engine = InnoDB;


kita modifikasi

alter table barang
modify column harga int not null default 0,
modify column jumlah int not null default 0;

akan menjadi seperti ini

MariaDB [belajar_mysql]> desc barang;
+-----------+--------------+------+-----+---------+-------+
| Field     | Type         | Null | Key | Default | Extra |
+-----------+--------------+------+-----+---------+-------+
| nama      | varchar(200) | NO   |     | NULL    |       |
| kode      | int(11)      | NO   |     | NULL    |       |
| harga     | int(11)      | NO   |     | 0       |       |
| jumlah    | int(11)      | NO   |     | 0       |       |
| deskripsi | text         | YES  |     | NULL    |       |
+-----------+--------------+------+-----+---------+-------+
5 rows in set (0.013 sec)


nah kita coba yang timestamp

alter table barang
add column waktu_dibuat timestamp not null default current_timestamp;

akan tampil

MariaDB [belajar_mysql]> desc barang;
+--------------+--------------+------+-----+---------------------+-------+
| Field        | Type         | Null | Key | Default             | Extra |
+--------------+--------------+------+-----+---------------------+-------+
| nama         | varchar(200) | NO   |     | NULL                |       |
| kode         | int(11)      | NO   |     | NULL                |       |
| harga        | int(11)      | NO   |     | 0                   |       |
| jumlah       | int(11)      | NO   |     | 0                   |       |
| deskripsi    | text         | YES  |     | NULL                |       |
| waktu_dibuat | timestamp    | NO   |     | current_timestamp() |       |
+--------------+--------------+------+-----+---------------------+-------+
6 rows in set (0.011 sec)

artinya kalo kita tidak memasukkan datanya maka isi dari waktu_dibuat adalah 
waktu saat ini


nah saya akan memberikan contoh menambah data tapi untuk lebih detilnya
dimateri selanjutnya

kalian tulis

insert into barang values();

jika kita ingin melihat kalian tulis

select * from barang;

hasilnya akan seperti ini


MariaDB [belajar_mysql]> select * from barang;
+------+------+-------+--------+-----------+---------------------+
| nama | kode | harga | jumlah | deskripsi | waktu_dibuat        |
+------+------+-------+--------+-----------+---------------------+
|      |    0 |     0 |      0 | NULL      | 2022-10-31 19:56:24 |
+------+------+-------+--------+-----------+---------------------+


maka meskipun nama tidak memiliki default value, karena nama itu not null maka
nilai defaultnya adalah string kosong

nah column waktu_dibuat itu adalah waktu sekarang



- Membuat ulang table

nah sekarang jika kalian ingin menghapus semua data didalam table dan
membuat ulang table 

kalian bisa tuliskan 

truncate nama_table;

kita coba

truncate barang;

kalo kalian ingin lihat datanya

select * from barang;

maka dia akan empty atau kosong,tapi tablenya akan tetap ada ya




- Menghapus table

jika kalian ingin menghapus table kalian tinggal tuliskan

drop table nama_table;




jadi itu ya materi mengenai table 
meskipun agak panjang tapi tetap semangat belajarnya

mudah mudahan kalian paham










-----------------------------------

source programmer zaman now mysql

-----------------




*/