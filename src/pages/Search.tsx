
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Search, Star, Filter, Bike, Home, UtensilsCrossed } from "lucide-react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const facilities = [
    {
      id: 1,
      name: "사이클 게스트하우스",
      type: "숙소",
      category: "accommodation",
      location: "강릉시 주문진읍",
      distance: "2.3km",
      rating: 4.8,
      reviews: 124,
      price: "40,000원",
      bikeServices: ["자전거 보관", "세차장", "수리도구"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "바이커스 카페",
      type: "식당",
      category: "restaurant",
      location: "춘천시 남면",
      distance: "1.8km",
      rating: 4.6,
      reviews: 89,
      price: "8,000원",
      bikeServices: ["자전거 거치대", "라이더 메뉴"],
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "리버사이드 펜션",
      type: "숙소",
      category: "accommodation",
      location: "여주시 강천면",
      distance: "5.2km",
      rating: 4.7,
      reviews: 67,
      price: "65,000원",
      bikeServices: ["자전거 보관", "세차장", "간단 수리"],
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "한강변 맛집",
      type: "식당",
      category: "restaurant",
      location: "김포시 월곶면",
      distance: "3.1km",
      rating: 4.5,
      reviews: 156,
      price: "12,000원",
      bikeServices: ["자전거 거치대", "테라스 휴게공간"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredFacilities = facilities.filter(facility => {
    if (selectedCategory === "all") return true;
    return facility.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bike className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">바이크투어</span>
            </div>
            <Button variant="outline" size="sm">← 홈으로</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* 필터 사이드바 */}
          <div className="lg:w-1/4">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>검색 필터</span>
                  <Filter className="h-5 w-5" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 카테고리 선택 */}
                <div>
                  <label className="text-sm font-semibold mb-2 block">시설 유형</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">전체</SelectItem>
                      <SelectItem value="accommodation">숙소</SelectItem>
                      <SelectItem value="restaurant">식당</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* 자전거 서비스 */}
                <div>
                  <label className="text-sm font-semibold mb-2 block">자전거 서비스</label>
                  <div className="space-y-2">
                    {["자전거 보관", "세차장", "수리도구", "라이더 메뉴", "테라스"].map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox id={service} />
                        <label htmlFor={service} className="text-sm">{service}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 거리 */}
                <div>
                  <label className="text-sm font-semibold mb-2 block">거리</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="거리 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1km">1km 이내</SelectItem>
                      <SelectItem value="3km">3km 이내</SelectItem>
                      <SelectItem value="5km">5km 이내</SelectItem>
                      <SelectItem value="10km">10km 이내</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* 가격대 */}
                <div>
                  <label className="text-sm font-semibold mb-2 block">가격대</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="가격 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">3만원 이하</SelectItem>
                      <SelectItem value="mid">3-7만원</SelectItem>
                      <SelectItem value="high">7만원 이상</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full">필터 적용</Button>
              </CardContent>
            </Card>
          </div>

          {/* 메인 컨텐츠 */}
          <div className="lg:w-3/4">
            {/* 검색 바 */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      type="text"
                      placeholder="지역, 시설명으로 검색..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button>검색</Button>
                </div>
              </CardContent>
            </Card>

            {/* 결과 헤더 */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">검색 결과 ({filteredFacilities.length}개)</h2>
              <Select defaultValue="distance">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="distance">거리순</SelectItem>
                  <SelectItem value="rating">평점순</SelectItem>
                  <SelectItem value="reviews">리뷰순</SelectItem>
                  <SelectItem value="price">가격순</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 검색 결과 */}
            <div className="space-y-4">
              {filteredFacilities.map((facility) => (
                <Card key={facility.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex">
                    <img 
                      src={facility.image}
                      alt={facility.name}
                      className="w-48 h-32 object-cover rounded-l-lg"
                    />
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold">{facility.name}</h3>
                            <Badge variant={facility.type === "숙소" ? "default" : "secondary"}>
                              {facility.type === "숙소" ? <Home className="w-3 h-3 mr-1" /> : <UtensilsCrossed className="w-3 h-3 mr-1" />}
                              {facility.type}
                            </Badge>
                          </div>
                          <div className="flex items-center text-gray-600 text-sm mb-2">
                            <MapPin className="h-4 w-4 mr-1" />
                            {facility.location} • {facility.distance}
                          </div>
                          <div className="flex items-center gap-1 mb-2">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{facility.rating}</span>
                            <span className="text-gray-600 text-sm">({facility.reviews}개 후기)</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-blue-600">{facility.price}</div>
                          <div className="text-sm text-gray-600">1박 기준</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {facility.bikeServices.map((service, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex justify-between items-center">
                        <Button variant="outline" size="sm">자세히 보기</Button>
                        <Button size="sm">예약하기</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
