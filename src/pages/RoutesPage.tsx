
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search as SearchIcon, Star, Bike, Map, Clock, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Routes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const routes = [
    {
      id: 1,
      name: "4대강 종주",
      distance: "633km",
      difficulty: "고급",
      duration: "4-5일",
      startPoint: "인천 아라뱃길",
      endPoint: "부산 을숙도",
      description: "한국의 대표적인 자전거 종주 코스로, 한강, 금강, 영산강, 낙동강을 따라 달리는 코스입니다.",
      highlights: ["한강공원", "세종호수공원", "금강자전거길", "낙동강하구둑"],
      rating: 4.8,
      reviews: 1247,
      image: "https://images.unsplash.com/photo-1544191696-15693bd25b65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "동해안 자전거길",
      distance: "770km",
      difficulty: "중급",
      duration: "5-7일",
      startPoint: "강원도 고성",
      endPoint: "부산 해운대",
      description: "동해의 푸른 바다를 보며 달리는 환상적인 해안 코스입니다.",
      highlights: ["정동진 해돋이", "울진 죽변항", "포항 호미곶", "부산 해운대"],
      rating: 4.6,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "서해안 자전거길",
      distance: "344km",
      difficulty: "초급",
      duration: "2-3일",
      startPoint: "인천 아라뱃길",
      endPoint: "목포 평화광장",
      description: "서해의 아름다운 석양과 갯벌을 감상할 수 있는 코스입니다.",
      highlights: ["인천대교", "안산 시화호", "태안 꽃지해변", "목포대교"],
      rating: 4.4,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "제주 올레길 사이클링",
      distance: "180km",
      difficulty: "중급",
      duration: "2-3일",
      startPoint: "제주공항",
      endPoint: "서귀포항",
      description: "제주도의 아름다운 자연경관을 만끽할 수 있는 섬 일주 코스입니다.",
      highlights: ["성산일출봉", "우도", "함덕해변", "천지연폭포"],
      rating: 4.7,
      reviews: 723,
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredRoutes = routes.filter(route => {
    if (selectedDifficulty !== "all" && route.difficulty !== selectedDifficulty) {
      return false;
    }
    if (searchQuery && !route.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "초급": return "bg-green-100 text-green-800";
      case "중급": return "bg-yellow-100 text-yellow-800";
      case "고급": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bike className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">종주메이트</span>
            </div>
            <Link to="/">
              <Button variant="outline" size="sm">← 홈으로</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* 지도 영역 */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Map className="h-5 w-5" />
              종주 코스 지도
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <Map className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">지도가 여기에 표시됩니다</p>
                <p className="text-sm">검색된 코스가 지도에 표시됩니다</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 검색 및 필터 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="md:col-span-2">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="코스명으로 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
            <SelectTrigger>
              <SelectValue placeholder="난이도 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체 난이도</SelectItem>
              <SelectItem value="초급">초급</SelectItem>
              <SelectItem value="중급">중급</SelectItem>
              <SelectItem value="고급">고급</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* 코스 목록 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRoutes.map((route) => (
            <Card key={route.id} className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={route.image}
                  alt={route.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className={`absolute top-3 left-3 ${getDifficultyColor(route.difficulty)}`}>
                  {route.difficulty}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold">{route.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{route.rating}</span>
                    <span className="text-gray-600 text-sm">({route.reviews})</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{route.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{route.startPoint} → {route.endPoint}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{route.distance}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{route.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">주요 명소</p>
                  <div className="flex flex-wrap gap-1">
                    {route.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Link to={`/route/${route.id}`}>
                    <Button variant="outline" size="sm">자세히 보기</Button>
                  </Link>
                  <Button size="sm">코스 저장</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRoutes.length === 0 && (
          <div className="text-center py-12">
            <Map className="h-16 w-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">검색 결과가 없습니다</h3>
            <p className="text-gray-500">다른 검색어나 필터를 사용해보세요.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Routes;
