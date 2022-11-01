// primary key


/*

sekarang kita akan membahas mengenai primary key
saat membuat table idealnya didalam table itu ada sebuah primary key

didalam mysql tidak ada primary key itu tidak masalah
tapi akan menjadi masalah ketika kalian ingin mengambil salah satu datanya

jadi rekomendasinya itu kalian harus membuat primary key disetiap table
lalu apa itu primary key?


primary key adalah sebuah identitas dari tiap row atau kalo didalam mysql itu namanya
record

jadi tanpa kita menambahkan identitas ditiap record maka itu akan menjadi masalah 
ketika kalian ingin mengambil data yang spesifik

jadi bisanya kita buat column dengan nama id
lalu didalamnya itu identitas yang uniq

contohnya jika diindonesia primary key itu diibiaratkan seperti ktp
jadi tiap orang pasti beda ktpnya beda no induk ktpnya

jadi kita kalian mengatur sebuah column ada primary key maka
ketika kalian menbahkan data yang sama itu si mysqlnya akan error


didalam mysql itu mendukung fitur primary key 2 column 
jadi primary key tidak hanya satu column, bisa 2 column 

akan tetapi disarankan kalian membuat satu column saja untuk primary key
biar tidak membingungkan 

nah kecuali ada kondisi yang memungkinkan kita menggunakan primary key
seperti membuat table yang berelasi many to many yang nanti akan kita bahas


jika kalian tidak ada kebutuhan disarankan kalian cuma buat satu column saja
sebagai primary key





- Menambahkan primary key 

create table products (
    id varchar(10) not null,
    name varchar(100) not null,
    description text,
    price int unsigned not null,
    quantity int unsigned not null default 0,
    created_at timestamp not null default current_timestamp,
    primary(id)
);

jadi saat membuat table kalian tinggal tambahkan primary lalu kurung didalamya
adalah column yang akan kita jadikan primary key

kalo lebih dari satu tinggal tambahkan koma lalu nama columnya apa
atau kalian bisa menulisnya seperti ini

create table products (
    id varchar(10) primary key not null,
    name varchar(100) not null,
    description text,
    price int unsigned not null,
    quantity int unsigned not null default 0,
    created_at timestamp not null default current_timestamp
);


jika tablenya sudah kita buat maka kita bisa gunakan alter table

alter table products
add primary key (id);

MariaDB [belajar_mysql]> desc products;
+-------------+------------------+------+-----+---------------------+-------+
| Field       | Type             | Null | Key | Default             | Extra |
+-------------+------------------+------+-----+---------------------+-------+
| id          | varchar(10)      | NO   | PRI | NULL                |       |
| name        | varchar(100)     | NO   |     | NULL                |       |
| description | text             | YES  |     | NULL                |       |
| price       | int(10) unsigned | NO   |     | NULL                |       |
| quantity    | int(10) unsigned | NO   |     | 0                   |       |
| created_at  | timestamp        | NO   |     | current_timestamp() |       |
+-------------+------------------+------+-----+---------------------+-------+
6 rows in set (0.014 sec)

maka id akan menjadi primary key

jadi jika kalian menambah data dimana column id itu datanya ada yang sama
maka dia ada error 


jadi itu lah primary key didalam mysql
mudah mudahan kalian paham











-----------------------------------

source programmer zaman now mysql

-----------------













*/