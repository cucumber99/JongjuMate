
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Search, Star, Users, Bike, Home, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const popularRoutes = [
    {
      id: 1,
      name: "4대강 종주",
      distance: "633km",
      difficulty: "고급",
      duration: "3-4일",
      rating: 4.8,
      reviews: 342,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "동해안 자전거길",
      distance: "765km",
      difficulty: "중급",
      duration: "4-5일",
      rating: 4.6,
      reviews: 198,
      image: "https://images.unsplash.com/photo-1544191696-15693072e45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "남한강 자전거길",
      distance: "220km",
      difficulty: "초급",
      duration: "1-2일",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const quickActions = [
    {
      icon: MapPin,
      title: "주변 시설 찾기",
      description: "내 위치 기반 숙소/식당 검색",
      link: "/search",
      color: "bg-blue-500"
    },
    {
      icon: Navigation,
      title: "종주 코스",
      description: "전국 자전거 종주길 탐색",
      link: "/routes",
      color: "bg-green-500"
    },
    {
      icon: Star,
      title: "리뷰 작성",
      description: "경험을 다른 라이더와 공유",
      link: "/reviews",
      color: "bg-orange-500"
    },
    {
      icon: Users,
      title: "커뮤니티",
      description: "종주 동호회 정보 교환",
      link: "/community",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* 헤더 */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bike className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">종주메이트</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/routes" className="text-gray-600 hover:text-blue-600 transition-colors">종주코스</Link>
              <Link to="/search" className="text-gray-600 hover:text-blue-600 transition-colors">시설검색</Link>
              <Link to="/community" className="text-gray-600 hover:text-blue-600 transition-colors">커뮤니티</Link>
              <Button variant="outline" size="sm">로그인</Button>
              <Button size="sm">회원가입</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              안전하고 즐거운
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                {" "}자전거 종주
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              전국 종주 코스 정보부터 자전거 친화적인 숙소와 맛집까지,<br />
              라이더들이 만든 라이더들을 위한 플랫폼
            </p>
            
            {/* 검색 바 */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="지역이나 종주 코스를 검색하세요..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500 shadow-lg"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-6">
                  검색
                </Button>
              </div>
            </div>

            {/* 통계 정보 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">150+</div>
                <div className="text-gray-600">종주 코스</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">2,400+</div>
                <div className="text-gray-600">등록 숙소</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">3,800+</div>
                <div className="text-gray-600">추천 맛집</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">15,000+</div>
                <div className="text-gray-600">활성 라이더</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 빠른 액션 */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">빠르게 시작하기</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.link}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <action.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-center">
                      {action.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 인기 종주 코스 */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">인기 종주 코스</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularRoutes.map((route) => (
              <Card key={route.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={route.image} 
                    alt={route.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-white/90 text-gray-900">
                    {route.difficulty}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {route.name}
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{route.rating}</span>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    {route.distance} • {route.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{route.reviews}개 후기</span>
                    <Link to={`/route/${route.id}`}>
                      <Button variant="outline" size="sm">자세히 보기</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">지금 바로 시작해보세요!</h3>
          <p className="text-xl mb-8 opacity-90">
            무료로 가입하고 전국의 라이더들과 함께하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-blue-600">
              <Home className="mr-2 h-5 w-5" />
              숙소 등록하기
            </Button>
            <Button size="lg" variant="secondary" className="text-blue-600">
              <UtensilsCrossed className="mr-2 h-5 w-5" />
              식당 등록하기
            </Button>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bike className="h-6 w-6" />
                <span className="text-xl font-bold">종주메이트</span>
              </div>
              <p className="text-gray-400">
                안전하고 즐거운 자전거 종주를 위한<br />
                라이더들의 플랫폼
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/routes" className="hover:text-white transition-colors">종주코스</Link></li>
                <li><Link to="/search" className="hover:text-white transition-colors">시설검색</Link></li>
                <li><Link to="/reviews" className="hover:text-white transition-colors">리뷰</Link></li>
                <li><Link to="/community" className="hover:text-white transition-colors">커뮤니티</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">고객센터</h4>
              <ul className="space-y-2 text-gray-400">
                <li>자주 묻는 질문</li>
                <li>문의하기</li>
                <li>신고하기</li>
                <li>개선 제안</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">회사</h4>
              <ul className="space-y-2 text-gray-400">
                <li>회사소개</li>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
                <li>제휴문의</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 종주메이트. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
