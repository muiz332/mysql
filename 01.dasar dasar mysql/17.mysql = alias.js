// alias


/*

dimateri kali ini kita akan belajar mengenai alias
nah mysql itu memiliki fitur untuk melakukan alias pada column atau tablenya

alias ini berguna ketika kita ingin mengubah nama column atau nama table 
saat melakukan select data

jadi misalnya ada nama column yang kepanjangan kalian bisa kasih alias
untuk menyingkatnya

mungkin saat ini alias itu tidak terlalu penting ya tapi ketika nanti kalian belajar mengenai
join itu akan terlihat banget kegunaannya


contoh nya kalian tambahkan as setelah nama column atau nama tablenya
lalu nama column baru yang sifatnya sementara

kita coba



- alias pada column


select id as kode,name as nama,category as kategory, price as harga,
quantity as stok from products;

kalo kita jalankan maka hasilnya seperti ini

MariaDB [belajar_mysql]> select id as kode,name as nama,category as kategory, price as harga,
    -> quantity as stok from products;
+-------+---------------------+----------+-------+------+
| kode  | nama                | kategory | harga | stok |
+-------+---------------------+----------+-------+------+
| P0001 | Mie Ayam Original   | Makanan  | 15000 |  100 |
| P0002 | Mie Ayam Bakso Tahu | NULL     | 20000 |  100 |
| P0003 | Mie Ayam Ceker      | Makanan  | 20000 |  100 |
| P0004 | Mie Ayam Spesial    | NULL     | 30000 |  100 |
| P0005 | Mie Ayam Yamin      | NULL     | 15000 |  100 |
+-------+---------------------+----------+-------+------+
5 rows in set (0.001 sec)


nah semua alias yang kita definisikan itu adalah nama sementara saat ditampilkan
ketika kalian melakukan select lagi nama, makan nama nama column tersebut
akan kembali seperti semula


dan ingat jika kalian menggunakan dua kata, kalian harus menulis aliasnya
didalam kutip




- alias pada table

nah kita akan coba melakukan alias pada table


select p.id as kode,p.name as nama,p.category as kategory, p.price as harga,
p.quantity as stok from products as p;

nah jadi ketika kalian melakukan alias pada table, kalian harus menambahkan nama alias tersebut
didepan nama columnnya yang ditambahkan dengan tanda titik

jadi anggap saja nama table itu adalah sebuah object pada javascript
nah columnnya itu adalah sebuah property

const products = {
    id : [],
    name : [],
    category : [],
    price : [],
    quantity : [] 
}

jadi untuk menampilkan nilainya kalian harus menulis seperti ini

products.id
products.name

nah sama seperti itu ya


jadi jika satu table tanpa kalian panggil nama tablenya lalu titik nama
columnnya itu sebenarnya bisa saja

tapi akan error ketika kalian menggunakan perintah join dikedua table atau lebih 
karena kita harus memberi tahu simysql column apa dari table mana












-----------------------------------

source programmer zaman now mysql

-----------------







*/