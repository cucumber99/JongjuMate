
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Search, Bike, Users, Map, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* 헤더 */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bike className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">종주메이트</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/search" className="text-gray-600 hover:text-blue-600 font-medium">시설 검색</Link>
              <Link to="/community" className="text-gray-600 hover:text-blue-600 font-medium">커뮤니티</Link>
              <Link to="/market" className="text-gray-600 hover:text-blue-600 font-medium">마켓</Link>
              <Link to="/login">
                <Button variant="outline">로그인</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            자전거 종주의 모든 것
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            전국 종주 코스 정보부터 라이더 친화적인 숙소, 식당까지.
            완벽한 종주 여행을 계획해보세요.
          </p>
          
          {/* 검색 바 */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="지역명, 코스명으로 검색해보세요..."
                  className="pl-12 h-14 text-lg border-0 shadow-lg focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Link to="/search">
                <Button size="lg" className="h-14 px-8">
                  검색
                </Button>
              </Link>
            </div>
          </div>

          {/* 주요 기능 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link to="/routes">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <Map className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">종주 코스</h3>
                  <p className="text-gray-600 text-sm">전국 주요 종주 코스 정보와 난이도별 가이드</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/search">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <Search className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">시설 검색</h3>
                  <p className="text-gray-600 text-sm">자전거 친화적인 숙소와 식당 찾기</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/community">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">커뮤니티</h3>
                  <p className="text-gray-600 text-sm">동행 찾기와 라이딩 정보 공유</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/market">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <ShoppingBag className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">바이크 마켓</h3>
                  <p className="text-gray-600 text-sm">자전거 용품 사고팔기</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* 인기 코스 섹션 */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">인기 종주 코스</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "4대강 종주",
                distance: "633km",
                difficulty: "고급",
                duration: "4-5일",
                image: "https://images.unsplash.com/photo-1544191696-15693bd25b65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "한국의 대표적인 자전거 종주 코스"
              },
              {
                id: 2,
                name: "동해안 자전거길",
                distance: "770km",
                difficulty: "중급",
                duration: "5-7일",
                image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "아름다운 동해 바다를 따라 달리는 코스"
              },
              {
                id: 3,
                name: "서해안 자전거길",
                distance: "344km",
                difficulty: "초급",
                duration: "2-3일",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "서해의 석양과 갯벌을 만날 수 있는 코스"
              }
            ].map((route) => (
              <Link key={route.id} to={`/route/${route.id}`}>
                <Card className="hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="relative">
                    <img 
                      src={route.image}
                      alt={route.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-3 left-3" variant="secondary">
                      {route.difficulty}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {route.name}
                      <Badge variant="outline">{route.distance}</Badge>
                    </CardTitle>
                    <CardDescription>{route.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>예상 소요: {route.duration}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>4.5</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 추천 시설 섹션 */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">라이더 추천 시설</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "사이클 게스트하우스",
                type: "숙소",
                location: "강릉시",
                rating: 4.8,
                price: "4만원",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "바이커스 카페",
                type: "식당",
                location: "춘천시",
                rating: 4.6,
                price: "8천원",
                image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "리버사이드 펜션",
                type: "숙소",
                location: "여주시",
                rating: 4.7,
                price: "6.5만원",
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "한강변 맛집",
                type: "식당",
                location: "김포시",
                rating: 4.5,
                price: "1.2만원",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-2 right-2" variant="secondary">
                    {facility.type}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{facility.name}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    {facility.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm">{facility.rating}</span>
                    </div>
                    <span className="font-semibold text-blue-600">{facility.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/search">
              <Button size="lg">더 많은 시설 보기</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bike className="h-6 w-6" />
                <span className="text-xl font-bold">종주메이트</span>
              </div>
              <p className="text-gray-400">자전거 종주의 모든 것</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">서비스</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/routes" className="hover:text-white">종주 코스</Link></li>
                <li><Link to="/search" className="hover:text-white">시설 검색</Link></li>
                <li><Link to="/community" className="hover:text-white">커뮤니티</Link></li>
                <li><Link to="/market" className="hover:text-white">마켓</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">고객지원</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">공지사항</a></li>
                <li><a href="#" className="hover:text-white">자주 묻는 질문</a></li>
                <li><a href="#" className="hover:text-white">문의하기</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">회사 정보</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">회사 소개</a></li>
                <li><a href="#" className="hover:text-white">이용약관</a></li>
                <li><a href="#" className="hover:text-white">개인정보처리방침</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 종주메이트. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
