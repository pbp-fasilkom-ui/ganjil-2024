---
sidebar_label: Tutorial 6
sidebar_position: 8
Path: docs/tutorial-6
---

# Tutorial 6: Pengantar Flutter

Pemrograman Berbasis Platform (CSGE602022) — diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Ganjil 2023/2024

---

## Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, mahasiswa diharapkan untuk dapat:

* Mengerti proses instalasi Flutter.
* Mengerti dan menggunakan perintah-perintah dasar Flutter yang perlu diketahui untuk mengerjakan proyek aplikasi.
* Memahami alur dasar pembuatan dan eksekusi aplikasi Flutter.
* Memahami elemen-elemen dasar pada Flutter.

## Pengenalan Flutter

Flutter adalah sebuah _framework_ aplikasi _mobile_ sumber terbuka (_open source_) yang diciptakan oleh Google pada 2017. Flutter digunakan dalam pengembangan aplikasi untuk sistem operasi Android dan iOS. Flutter juga mendukung untuk pengembangan aplikasi berbasis web, Windows, Linux, dan MacOS secara _native_.

Keuntungan dari Flutter sendiri adalah kemampuannya untuk menciptakan aplikasi untuk berbagai _platform_ dengan hanya satu _codebase_. Selain itu, fitur JIT (_just in time_) memungkinkan pengembang aplikasi untuk melihat perubahan yang dilakukan pada _codebase_ secara langsung tanpa harus mengulang proses kompilasi kode aplikasi dari awal.

## Instalasi Flutter


1. Akses tautan berikut sesuai dengan sistem operasi yang kamu gunakan.

    a. [Mac OS](https://docs.flutter.dev/get-started/install/macos)
  
    Khusus pengguna Mac OS yang menggunakan Homebrew, kamu dapat menggunakan perintah `brew install --cask flutter` untuk menginstal Flutter.
  
    b. [Windows](https://docs.flutter.dev/get-started/install/windows)

    c. [Linux](https://docs.flutter.dev/get-started/install/linux)

2. Instal Flutter versi terkini (_latest version_) dengan mengikuti panduan pada tautan di atas.
  
    Untuk pengguna Mac, silakan lewati tahap `iOS Setup` dan langsung ke tahap `Android Setup`.

3. Instal IDE pilihan kamu yang akan digunakan untuk mengembangkan aplikasi Flutter.

    a. [Android Studio (Recommended)](https://developer.android.com/studio)

    b. [Visual Studio Code](https://code.visualstudio.com/)

    Kamu dapat menggunakan Visual Studio Code untuk Flutter dengan menginstall ekstensi [Dart](https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code) dan [Flutter](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter).

    Kamu juga dapat membaca fungsionalitas IDE yang disediakan oleh ekstensi Flutter pada tautan yang tersedia.


## Tutorial: _Getting Started with Flutter_

1. Buka Terminal atau Command Prompt.

2. Masuk ke direktori di mana kamu ingin menyimpan proyek _flutter_-mu.

3. _Generate_ proyek Flutter baru dengan nama **shopping_list**, kemudian masuk ke dalam direktori proyek tersebut.

    ```bash
    flutter create <APP_NAME>
    cd <APP_NAME>
    ```

4. Jalankan proyek melalui Terminal atau Command Prompt.

    ```bash
    flutter run
    ```
    Untuk pengguna macOS, terdapat beberapa opsi untuk menjalankan aplikasi _flutter_, namun yang termudah adalah:
    1. Menggunakan [*emulator* pada Android Studio](https://docs.flutter.dev/get-started/install/macos#set-up-the-android-emulator)
    2. Menggunakan Google Chrome
        - Jalankan perintah di bawah untuk _enable web support_ (hanya perlu dilakukan sekali)
            ```bash
            flutter config --enable-web
            ```
        - Kemudian, di direktori proyek, jalankan proyek tersebut di aplikasi Google Chrome dengan perintah 
            ```bash
            flutter run -d chrome
            ```

5. Akan muncul tampilan seperti di bawah ini.

    ![First App](https://docs.flutter.dev/assets/images/docs/get-started/ios/starter-app.png)

6. Lakukan `git init` pada _root folder_ dan `add`-`commit`-`push` proyek ke sebuah repositori baru di GitHub. Kamu dapat menamai repositori barumu dengan nama `pbp-flutter-tutorial`.

---

## Tutorial: Merapikan Struktur Proyek

Sebelum menyelami Flutter lebih lanjut, kita akan merapikan struktur file pada proyek kita terlebih dahulu agar kode proyek dapat lebih mudah dipahami.

1. Buatlah file baru bernama `menu.dart` pada direktori `shopping_list/lib`. Pada baris pertama file tersebut, tambahkan kode di bawah ini: 
    ```dart
    import 'package:flutter/material.dart';
    ```

2. Dari file `main.dart`, pindahkan kode baris ke-39 hingga akhir yang berisi kedua class di bawah ini:  
    ```dart
    class MyHomePage ... {
        ...
    }
    
    class _MyHomePageState ... {
        ...
    }
    ```
    ke file `menu.dart` yang baru saja kamu buat.

3. Kamu akan melihat bahwa pada file `main.dart`, akan terdapat error pada baris ke-34, yang berisi kode berikut:
    ```dart
    home: const MyHomePage(title: 'Flutter Demo Home Page'),
    ```
    Hal ini terjadi karena file `main.dart` tidak lagi mengenali class MyHomePage karena sudah kita pindahkan ke file lain, yaitu `menu.dart`. Untuk menyelesaikan masalah ini, tambahkan kode berikut ini pada awal file.
    ```dart
    import 'package:shopping_list/menu.dart';
    ``` 

5. Jalankan proyek melalui Terminal atau Command Prompt untuk memastikan bahwa aplikasi tetap dapat berjalan dengan baik.

---
## Tutorial: Membuat Widget Sederhana pada Flutter

Dalam tutorial ini, kita akan mempelajari cara membuat widget sederhana di Flutter. Kita akan membuat nama dari toko kita sebagai header dan card yang menandakan barang yang dijual. Saat button beli ditekan, akan keluar pemberitahuan di bagian bawah layar. 

Pertama-tama, kita bisa mengubah tema warna aplikasi menjadi indigo.
1. Buka file `main.dart`
2. Mengubah kode pada `main.dart` dibagian tema aplikasi kita yang mempunyai tipe `Material Color`
```primarySwatch: Colors.indigo,```

Coba jalankan proyek kamu untuk melihat apakah warna tema aplikasi sudah berubah menjadi hijau.

Setelah mengubah warna tema aplikasi, kita akan mengubah sifat widget halaman menu menjadi stateless.

1. Pada pada file `main.dart`, hapus `const MyHomePage(title: 'Flutter Demo Home Page')` sehingga menjadi:

    ```
    MyHomePage()
    ```
3. Pada file `main.dart`, kita akan mengubah sifat widget halaman dari stateful menjadi stateless. `Lakukan perubahan pada bagian ({super.key, required this.title})` menjadi `({Key? key}) : super(key: key);`. Hapus `final String title;` sampai bawah serta tambahkan Widget build sehingga kode terlihat seperti di bawah.
    ```
    class MyHomePage extends StatelessWidget {
        MyHomePage({Key? key}) : super(key: key);

        @override
        Widget build(BuildContext context) {
            return Scaffold(
                ...
            );
        }
    }
    ```
Jangan lupa untuk hapus fungsi **State** yang ada dibawah bagian stateless widget ini. 

Setelah mengubah sifat widget halaman menu menjadi stateless, kita akan menambahkan teks dan card untuk memperlihatkan barang yang dijual.
1. Untuk menambahkan teks dan card, kalian dapat menambahkan barang-barang yang dijual. Kita dapat memulai dengan *define* tipe pada list kita.
```
class ShopItem {
  final String name;
  final IconData icon;
  final double price;

  ShopItem(this.name, this.icon, this.price);
}
``` 
Lalu dibawah kode ```MyHomePage({Key? key}) : super(key: key);```, kita dapat menambahkan barang-barang yang dijual (nama, harga, dan icon barang tersebut)
```
  final List<ShopItem> items = [
    ShopItem("Alarm", Icons.access_alarm, 100000),
    ShopItem("Cart", Icons.shopping_cart, 50000),
    ShopItem("Pizza", Icons.local_pizza, 60000),
    ShopItem("Toothpaste", Icons.brush, 15000),
    ShopItem("Android", Icons.phone_android, 4999999.99),
  ];
```
 
2. Selanjutnya kita menambahkan kode dibawah ini didalam **Widget** build.
``` 
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Shopping List',
        ),
      ),
      body: SingleChildScrollView(
        // Widget wrapper yang dapat discroll
        child: Padding(
          padding: const EdgeInsets.all(10.0), // Set padding dari halaman
          child: Column(
            // Widget untuk menampilkan children secara vertikal
            children: <Widget>[
              const Padding(
                padding: EdgeInsets.only(top: 10.0, bottom: 10.0),
                // Widget Text untuk menampilkan tulisan dengan alignment center dan style yang sesuai
                child: Text(
                  'PBP Shop', // Text yang menandakan toko
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: 30,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              // Grid layout
              GridView.count(
                // Container pada card kita.
                primary: true,
                padding: const EdgeInsets.all(20),
                crossAxisSpacing: 10,
                mainAxisSpacing: 10,
                crossAxisCount: 3,
                shrinkWrap: true,
                children: items.map((ShopItem item) {
                  // Iterasi untuk setiap item
                  return ShopCard(item);
                }).toList(),
              ),
            ],
          ),
        ),
      ),
    );
```
3. Walaupun sebelumnya terdapat error, namun tidak perlu khawatir, anda hanya perlu membuat widget stateless baru untuk menampilkan card 
```
class ShopCard extends StatelessWidget {
  final ShopItem item;

  const ShopCard(this.item, {super.key}); // Constructor

  @override
  Widget build(BuildContext context) {
    return Card(
      color: Colors.indigo, // Define warna pada card kita
      child: Padding(
        padding: const EdgeInsets.all(4.0),
        child: Column(
          mainAxisAlignment:
              MainAxisAlignment.center, // Center elemen pada card
          children: <Widget>[
            Icon(item.icon,
                size: 32, color: Colors.white), // Jadikan warna putih
            Text(item.name, style: const TextStyle(color: Colors.white)),
            Text('Rp ${item.price.toStringAsFixed(2)}',
                style: const TextStyle(color: Colors.white),
                textAlign: TextAlign.center),
          ],
        ),
      ),
    );
  }
}
```
Hasil dari pekerjaan tersebut akan seperti ini:
![](https://hackmd.io/_uploads/ryrt-OoGa.png)

## Referensi Tambahan

- [Flutter Docs](https://https://docs.flutter.dev/)
- [Write your first Flutter app, part 1](https://docs.flutter.dev/get-started/codelab)
- [An Introduction to Flutter: The Basics by FreeCodeCamp](https://www.freecodecamp.org/news/an-introduction-to-flutter-the-basics-9fe541fd39e2/)
- [Flutter Course for Beginners – 37-hour Cross Platform App Development Tutorial by FreeCodeCamp](https://www.youtube.com/watch?v=VPvVD8t02U8)

## Kontributor

- Alanna
- Alvaro Austin
- Naila Shafirni Hidayat
- Shayna Putri Fitria

## Credits

Tutorial ini dikembangkan berdasarkan [PBP Ganjil 2023](https://github.com/pbp-fasilkom-ui/ganjil-2023) dan [PBP Genap 2023](https://github.com/pbp-fasilkom-ui/genap-2023) yang ditulis oleh Tim Pengajar Pemrograman Berbasis Platform 2023. Segala tutorial serta instruksi yang dicantumkan pada repositori ini dirancang sedemikian rupa sehingga mahasiswa yang sedang mengambil mata kuliah Pemrograman Berbasis Platform dapat menyelesaikan tutorial saat sesi lab berlangsung.
