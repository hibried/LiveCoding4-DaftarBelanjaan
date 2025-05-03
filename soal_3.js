// Buat Class daftar belanjaan (shopping list).

// Class terdiri dari:
// nama
// harga
// kategori (makanan, pakaian, alat tulis

// Tugas:
// Tampilkan semua nama barang.
// Filter barang harga di atas 20 ribu.
// Hitung total harga semua barang.
// Filter hanya kategori makanan, lalu tampilkan semua nama barangnya.

let items = [
    { name: "Pensil", price: 5000, category: "alat tulis" },
    { name: "Buku", price: 15000, category: "alat tulis" },
    { name: "Nasi Kotak", price: 25000, category: "makanan" },
    { name: "Kaos", price: 50000, category: "pakaian" },
    { name: "Roti", price: 10000, category: "makanan" }
];

class DaftarBelanjaan{
    constructor(items){
        this.items = items;
    }

    showAll(){
        return this.items.map((item) => {
            return item.name;
        });
    }

    above20Rb(){
        const list = this.items.filter((item) => {
            return item.price > 20000;
        });

        return list.map((n) => {
            return n.name;
        });
    }

    countTotal(){
        return this.items.reduce((total, item) => {
            return total + item.price;
        }, 0);
    }

    categoryFilter(param){
        const list = this.items.filter((item) => {
            return item.category === param;
        });

        return list.map((n) => {
            return n.name;
        });
    }
}

const belanjaan = new DaftarBelanjaan(items);

console.log("Semua nama barang:");
console.log(belanjaan.showAll());
console.log('');

console.log("Barang harga diatas 20 ribu:");
console.log(belanjaan.above20Rb());
console.log('');

console.log("Total harga semua barang:");
console.log(`Rp${belanjaan.countTotal()}`);
console.log('');

console.log('Barang kategori "makanan":');
console.log(belanjaan.categoryFilter("makanan"));
console.log('');