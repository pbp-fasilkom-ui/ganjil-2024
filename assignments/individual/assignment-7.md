---
sidebar_label: Tugas 7
sidebar_position: 7
Path: assignment/individual/assignment-7
---

# Tugas 7: Elemen Dasar Flutter

Pemrograman Berbasis Platform (CSGE602022) — diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Ganjil 2023/2024

---

## Deskripsi Tugas

Pada tugas ini, kamu akan mengimplementasikan aplikasi yang telah kamu kembangkan menggunakan Flutter berdasarkan beberapa hal yang sudah kamu pelajari selama tutorial 

*Checklist* untuk tugas ini adalah sebagai berikut:

- [ ] Membuat sebuah program Flutter baru dengan tema inventori seperti tugas-tugas sebelumnya.
- [ ] Mengubah tampilan program menjadi seperti berikut.
    ![Inventory App](https://i.ibb.co/RTYSn3h/tugas-7.png)
- [ ] Mengimplementasikan logika berikut pada program.
    - [ ] Tombol + menambahkan _counter_ total item sebanyak 1 satuan.
    - [ ] Tombol - mengurangi _counter_ total item sebanyak 1 satuan. Apabila _counter_ bernilai 0, maka tombol ini tidak memberikan efek apapun.
    - [ ] Apabila total item bernilai ganjil, maka teks indikator berubah menjadi "GANJIL" berwarna merah.
    - [ ] Apabila total item bernilai genap, maka teks indikator berubah menjadi "GENAP" berwarna biru.
    - [ ] Angka 0 dianggap angka genap.
    - [ ] Ubah judul <Nama Inventory> menjadi nama _project_ inventori kamu.
- [ ] Menjawab beberapa pertanyaan berikut pada `README.md` pada *root folder*.
    - [ ] Apa perbedaan utama antara stateless dan stateful widget dalam konteks pengembangan aplikasi Flutter?
    - [ ] Apa peran dan kegunaan dari widget Scaffold dalam pengembangan aplikasi Flutter? Berikan contoh penerapannya dalam proyekmu
    - [ ] Apa fungsi dari setState()? Jelaskan variabel apa saja yang dapat terdampak dengan fungsi tersebut
    - [ ] Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial)
- [ ] Melakukan `add`-`commit`-`push` ke GitHub.

## Tenggat Waktu Pengerjaan

Tenggat waktu pengerjaan Tugas 7 adalah **Rabu, 8 November, pukul 12.00 siang**.

Harap mengumpulkan link repositori yang kamu gunakan ke dalam slot submisi yang telah disediakan di SCELE.

## Bonus

Kamu akan mendapatkan nilai bonus pada penilaian tugas ini apabila kamu membuat fitur berikut.
- [ ] Menyembunyikan/menghilangkan tombol - apabila _counter_ bernilai 0.
