# Weather-Website

Weather api kullanılarak kullanıcıların güncel olarak arama butonu sayesinde istedikleri şehri yada illerin hava durumunu öğrenmesini sağlayan bir web sitedir. Bunun haricinde main kısmındada türkiyenin belirli illerinin güncel olarak tutulan hava durumu bilgiside yer almaktadır.

## Ana Özellikler

**Search Buton**: Herhangi bir şehrin hava durumunu öğrenmek için şehrin ismini inputa yazarak o şehrin güncel hava durumu bilgilerine istek atarak ekrana getirmesini sağlıyor.

**Main**: Türkiyedeki belirli şehirlerin güncel olarak hava durumu verisini tuttuğumuz yerdir. Kulanıcılar bu şehirlerin hava durumunu herhangi bir arama yapmadan göreblirler.

**Modüler Yapı**: Proje, modüler bir yapıya sahip olduğu için, geliştiriciler ihtiyaçlarına göre yeni özellikler ekleyebilir veya mevcut özellikleri çıkarabilir.


## Kurulum

1. Projeyi Kopyalayın
İlk olarak, projeyi yerel bilgisayarınıza kopyalamk için GitHub'dan klonlayın:
```bash
git clone git@github.com:Brkcnulusy/Weather-Website.git
cd Weather-Website
```
2. Bağımlılıkları Yükleyin
Herhangi bir Bağlılığı bulunmamaktır. Projece vanilya.js ile yazılmıştır.

3. Uygulamayı Çalıştırın
Eğer Live Server uzantısı yüklü ise html dosyasına sağ tıklayıp ilk seçenek olan Live Server ile Açın seçeneğine tıklayıp açabilirsiniz.
Live Server uzantısına sahip değilseniz terminale npm run dev yazarak ve Tarayıcınızda http://localhost:3000 adresine giderek uygulamayı kullanmaya başlayabilirsiniz.

### Kullanım
Http isteklerini kullanmak için request.js adlı dosyamız bulunmaktadır ve içinde http methodları bulunmakradır. Bu methodları kullanmak için:
import { get, post, put, delete } from "./request.js"; yazarak ulaşabilirsiniz ve projede çağırabilirsiniz.

Projede kullandığımız resimler ise assets için images klasöründe tutulmaktadır ordan kullanabilir yada eklemek istediğiniz resim varsa o dosyaya ekleyebilirsiniz.


# Project Link
[Weather Website](https://weather-website-txfk88nsb-burak-can-s-projects.vercel.app/)