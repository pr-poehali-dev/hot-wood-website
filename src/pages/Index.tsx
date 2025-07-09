import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь будет отправка заявки
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Flame" className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold text-amber-900">
                HOT WOOD
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-amber-800 hover:text-orange-600 transition-colors"
              >
                О компании
              </a>
              <a
                href="#gallery"
                className="text-amber-800 hover:text-orange-600 transition-colors"
              >
                Галерея
              </a>
              <a
                href="#reviews"
                className="text-amber-800 hover:text-orange-600 transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="text-amber-800 hover:text-orange-600 transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/img/5f2361fe-67c7-4662-b71a-178e9990995a.jpg)",
          }}
        ></div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            Эксклюзивные <span className="text-orange-400">бани</span> из дерева
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
            Каркасные бани и мобильные бани-бочки премиум качества
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Получить расчет
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-amber-900 px-8 py-4 text-lg"
              onClick={() =>
                document
                  .getElementById("gallery")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Смотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              О компании HOT WOOD
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы создаем уникальные бани из натурального дерева с 2015 года.
              Наша команда профессионалов воплощает мечты о собственной бане в
              реальность.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Award"
                  className="h-12 w-12 text-orange-600 mx-auto mb-4"
                />
                <CardTitle className="text-amber-900">Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Используем только отборную древесину и современные технологии
                  строительства
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Clock"
                  className="h-12 w-12 text-orange-600 mx-auto mb-4"
                />
                <CardTitle className="text-amber-900">Скорость</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Изготавливаем и устанавливаем бани в течение 2-4 недель
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Shield"
                  className="h-12 w-12 text-orange-600 mx-auto mb-4"
                />
                <CardTitle className="text-amber-900">Гарантия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Даем 5 лет гарантии на все виды работ и материалы
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              Наши работы
            </h2>
            <p className="text-xl text-gray-600">
              Посмотрите на результаты нашей работы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/img/5f2361fe-67c7-4662-b71a-178e9990995a.jpg"
                  alt="Каркасная баня"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-bold mb-2">Каркасная баня</h3>
                    <p>Премиум класс</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/img/263a6b6a-a5cd-4116-96af-ba78eb021330.jpg"
                  alt="Баня-бочка"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-bold mb-2">Баня-бочка</h3>
                    <p>Мобильная версия</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/img/919278d4-7c96-42e5-b5ff-e99ab773a5e2.jpg"
                  alt="Интерьер бани"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-bold mb-2">Интерьер бани</h3>
                    <p>Уютная атмосфера</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят наши довольные клиенты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Icon name="User" className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-amber-900">
                      Александр М.
                    </CardTitle>
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          className="h-4 w-4 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Отличная работа! Баня получилась именно такой, как мы хотели.
                  Качество материалов на высоте, все сделано в срок."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Icon name="User" className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-amber-900">Мария К.</CardTitle>
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          className="h-4 w-4 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Заказывали баню-бочку. Очень довольны результатом!
                  Профессиональная команда, качественные материалы."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Icon name="User" className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-amber-900">Дмитрий П.</CardTitle>
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          className="h-4 w-4 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Рекомендую! Быстро, качественно, недорого. Баня радует уже
                  второй год, никаких проблем."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              Оставить заявку
            </h2>
            <p className="text-xl text-gray-600">
              Получите бесплатный расчет стоимости вашей бани
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-900 text-center">
                Заказать консультацию
              </CardTitle>
              <CardDescription className="text-center">
                Заполните форму и мы свяжемся с вами в течение 30 минут
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Телефон"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Расскажите о вашем проекте"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 text-lg hover:scale-[1.02] transition-all duration-300"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Flame" className="h-8 w-8 text-orange-400" />
                <span className="text-2xl font-bold">HOT WOOD</span>
              </div>
              <p className="text-amber-200">
                Создаем уникальные бани из натурального дерева с 2015 года
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-amber-200">
                <p>📞 +7 (999) 123-45-67</p>
                <p>📧 info@hotwood.ru</p>
                <p>📍 г. Москва, ул. Строительная, 15</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <div className="space-y-2 text-amber-200">
                <p>• Каркасные бани</p>
                <p>• Бани-бочки</p>
                <p>• Проектирование</p>
                <p>• Установка</p>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; 2024 HOT WOOD. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
