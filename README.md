# Angular-Project-TDT-Music-2021-v2
Sau khi git clone về có 2 project là:
1. backend_api_web_nghe_nhac.(laravel)

 Chạy các lệnh sau để project hoạt động.
 
> 1.1: composer install.
> 1.2: npm install.
> 1.3: cp .env.example .env
> 1.4: Vào file .env thay đổi các thông tin database của mình:
 >     DB_DATABASE= (db name)
 >     DB_USERNAME=root
 >     DB_PASSWORD=(root password.)
> 1.5: php artisan jwt:secret
> 1.6: php artisan migrate 
> 1.7: php artisan serve để chạy api.
 
2. TDT-MUSIC-V22021.

  Chạy các lệnh sau để project hoạt động.
  
 > 2.1: npm install --save-dev @angular-devkit/build-angular
