// type data string



/*


selain number biasanya kita dapat menyimpan data didalam table berbentuk tulisan
nah type data ini dinamakan dengan string atau text

nah ada banyak juga type data string didalam mysql


- Char dan varchar

kita bisa mengatur panjang dari sebuah string yang ditampung oleh char ataupun varchar
misalnya

char(9) atau varchar(9)

dan maximum dari char ataupun varchar adalah 65535 

lalu perbedaan dari varchar dan char itu apa ?


char

nilai    char(3)   penyimpanan yang dibutuhkan
""       "   "              3 bytes
"a"      "a  "              3 bytes
"ab"     "ab "              3 bytes
"abc"    "abc"              3 bytes


nah jika kita menggunakan char maka yang akan terjadi seperti itu
kita membatasi char(3) sebanyak 3 karakter

akan tetapi jika kita menuliskannya belum mencapai 3 karakter 
maka yang disimpan tetap 3 karakter sisanya diganti dengan spasi

jadi tidak peduli ada berapa karakter dialamnya 
char akan tetap menyimpan dengan nilai maximumnya

kita memasukkan 2 karakter maka char akan menyimpannya sebagai 3 karakter



varchar 

nilai    varchar(3)   penyimpanan yang dibutuhkan
""       ""              1 bytes
"a"      "a"             1 bytes
"ab"     "ab"            2 bytes
"abc"    "abc"           3 bytes


varchar itu kebalikan dari char
jika kita hanya menuliskan 2 karakter maka yang disimpan akan 2 karakter juga
jadi penyimpanan yang dibutuhkan itu sesuai dengan apa yang kita masukkan 

akan tapi kita kita menggunakan varchar data lebih besar misalkan

varchar(3) kita menulisnya 'abcde' kan itu lebih besar dari 3 karakter
maka yang disimpan mungkin akan sekitar 5 bytes 

karena sivarchar akan membutuhkan informasi tambahan untuk si stringnya
jadi kalo kalian ingin menyimpan data yang fixed atau panjangnya itu selalu sama

gunakanlah char dan jika tidak menentu gunakanlah varchar




- Text


dan ada juga type data text 
kalian bisa baca disini karena text itu ada beberapa macam

https://blog.devart.com/mysql-data-types.html#text_data_type



jadi kalo text itu kita tidak bisa ngatur panjangnya 
jadi panjangnya secara otomatis sudah ada maximumnya




- Enum

nah type data enum itu kita bisa membuat pilihan dari text yang dimasukkan
misalkan column gender itu kan cuma ada pria dan wanita

jadi kita bisa pakai enum
enum('pria','wanita')

jadi selain pria dan wanita maka si mysql akan menolaknya




jadi itu type data string pada mysql
mudah mudahan kalian paham







-----------------------------------

source programmer zaman now mysql

-----------------























*/