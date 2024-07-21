# nextjs-plesk-fix

A CLI tool to automatically fix Next.js deployment issues on Plesk servers.

### Installation

```bash
npm install -g nextjs-plesk-fix
```

### Usage

Navigate to your Next.js project directory and run:

```bash
nextjs-plesk-fix
```

This will automatically modify the `/node_modules/.bin/next` file to resolve common deployment issues on Plesk servers.

### What it does

This tool makes the following changes to the `/node_modules/.bin/next` file:

1. Sets `isDefault: false` for the "dev" command.
2. Sets `isDefault: true` for the "start" command.

These changes help to ensure that your Next.js application starts correctly when deployed on a Plesk server.

### Note

Remember to run this tool after each `npm install` or when pulling new changes, as these actions might overwrite the modifications.

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### License

This project is licensed under the MIT License.

### Kurulum

```bash
npm install -g nextjs-plesk-fix
```

### Kullanım

Next.js proje dizininize gidin ve şu komutu çalıştırın:

```bash
nextjs-plesk-fix
```

Bu, Plesk sunucularında yaygın dağıtım sorunlarını çözmek için `/node_modules/.bin/next` dosyasını otomatik olarak değiştirecektir.

### Ne yapar

Bu araç, `/node_modules/.bin/next` dosyasında aşağıdaki değişiklikleri yapar:

1. "dev" komutu için `isDefault: false` olarak ayarlar.
2. "start" komutu için `isDefault: true` olarak ayarlar.

Bu değişiklikler, Next.js uygulamanızın Plesk sunucusunda doğru şekilde başlatılmasını sağlar.

### Not

Her `npm install` işleminden sonra veya yeni değişiklikleri çekerken bu aracı çalıştırmayı unutmayın, çünkü bu işlemler yapılan değişikliklerin üzerine yazabilir.

### Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen bir Pull Request göndermekten çekinmeyin.

### Lisans

Bu proje MIT Lisansı altında lisanslanmıştır.
