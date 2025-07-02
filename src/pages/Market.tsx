
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Search, Star, Filter, Bike, Plus, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Market = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("buy");

  const marketItems = [
    {
      id: 1,
      title: "트렉 도마네 SL6 (중고)",
      category: "bike",
      price: 2800000,
      originalPrice: 4200000,
      condition: "상급",
      location: "서울 강남구",
      seller: "라이더김",
      date: "2024-01-15",
      images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      description: "2년 사용한 트렉 도마네입니다. 관리 잘 되어있고 큰 사고 없었습니다.",
      views: 234,
      likes: 12,
      specs: ["56cm 프레임", "시마노 105 그룹셋", "카본 휠셋"]
    },
    {
      id: 2,
      title: "가민 엣지 830 GPS (새상품)",
      category: "accessory",
      price: 450000,
      originalPrice: 550000,
      condition: "신품",
      location: "부산 해운대구",
      seller: "사이클샵",
      date: "2024-01-14",
      images: ["https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      description: "미개봉 새상품 가민 엣지 830입니다. 정품 보증서 포함.",
      views: 156,
      likes: 8,
      specs: ["3.5인치 컬러 터치스크린", "GPS/GLONASS", "최대 20시간 배터리"]
    },
    {
      id: 3,
      title: "시마노 SPD 클릿 슈즈",
      category: "clothing",
      price: 180000,
      originalPrice: 280000,
      condition: "중급",
      location: "대구 수성구",
      seller: "바이크러버",
      date: "2024-01-13",
      images: ["https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      description: "사이즈 270mm, 몇 번 착용하지 않아 상태 좋습니다.",
      views: 89,
      likes: 5,
      specs: ["사이즈 270mm", "BOA 다이얼", "카본 솔"]
    },
    {
      id: 4,
      title: "자전거 정비 도구 세트",
      category: "tool",
      price: 95000,
      originalPrice: 150000,
      condition: "중급",
      location: "인천 연수구",
      seller: "정비왕",
      date: "2024-01-12",
      images: ["https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
      description: "집에서 간단한 정비할 때 사용했던 도구들입니다.",
      views: 67,
      likes: 3,
      specs: ["멀티툴", "체인 도구", "타이어 레버", "펌프"]
    }
  ];

  const myItems = [
    {
      id: 1,
      title: "스페셜라이즈드 알레즈 (판매중)",
      price: 1200000,
      status: "판매중",
      views: 45,
      likes: 7,
      date: "2024-01-10"
    },
    {
      id: 2,
      title: "카스크 헬멧 (판매완료)",
      price: 150000,
      status: "판매완료",
      views: 23,
      likes: 2,
      date: "2024-01-05"
    }
  ];

  const filteredItems = marketItems.filter(item => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  const getCategoryBadge = (category: string) => {
    const categoryMap = {
      bike: "자전거",
      accessory: "액세서리",
      clothing: "의류",
      tool: "도구"
    };
    return categoryMap[category as keyof typeof categoryMap] || category;
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "신품": return "bg-green-100 text-green-800";
      case "상급": return "bg-blue-100 text-blue-800";
      case "중급": return "bg-yellow-100 text-yellow-800";
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
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="outline" size="sm">← 홈으로</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">바이크 마켓</h1>
          <p className="text-gray-600">자전거 용품을 사고팔아보세요</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="buy">구매하기</TabsTrigger>
            <TabsTrigger value="sell">내 상품</TabsTrigger>
          </TabsList>

          <TabsContent value="buy" className="mt-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* 필터 사이드바 */}
              <div className="lg:w-1/4">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>필터</span>
                      <Filter className="h-5 w-5" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold mb-2 block">카테고리</label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">전체</SelectItem>
                          <SelectItem value="bike">자전거</SelectItem>
                          <SelectItem value="accessory">액세서리</SelectItem>
                          <SelectItem value="clothing">의류</SelectItem>
                          <SelectItem value="tool">도구</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-semibold mb-2 block">가격대</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="가격 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">10만원 이하</SelectItem>
                          <SelectItem value="mid">10-100만원</SelectItem>
                          <SelectItem value="high">100만원 이상</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-semibold mb-2 block">상태</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="상태 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">신품</SelectItem>
                          <SelectItem value="high">상급</SelectItem>
                          <SelectItem value="mid">중급</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
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
                          placeholder="상품명, 브랜드명으로 검색..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <Button>검색</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* 상품 목록 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredItems.map((item) => (
                    <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="relative">
                        <img 
                          src={item.images[0]}
                          alt={item.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                          <Heart className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary">{getCategoryBadge(item.category)}</Badge>
                              <Badge className={getConditionColor(item.condition)}>{item.condition}</Badge>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xl font-bold text-blue-600">
                                {item.price.toLocaleString()}원
                              </span>
                              {item.originalPrice > item.price && (
                                <span className="text-sm text-gray-500 line-through">
                                  {item.originalPrice.toLocaleString()}원
                                </span>
                              )}
                            </div>
                            <div className="flex items-center text-gray-600 text-sm mb-2">
                              <MapPin className="h-4 w-4 mr-1" />
                              {item.location}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500 gap-3">
                            <span>조회 {item.views}</span>
                            <span className="flex items-center gap-1">
                              <Heart className="h-4 w-4" />
                              {item.likes}
                            </span>
                          </div>
                          <Button size="sm">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            문의하기
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sell" className="mt-6">
            <div className="mb-6">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                상품 등록
              </Button>
            </div>

            <div className="space-y-4">
              {myItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="font-medium text-blue-600">
                            {item.price.toLocaleString()}원
                          </span>
                          <Badge variant={item.status === "판매중" ? "default" : "secondary"}>
                            {item.status}
                          </Badge>
                          <span>조회 {item.views}</span>
                          <span>관심 {item.likes}</span>
                          <span>{item.date}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">수정</Button>
                        <Button variant="outline" size="sm">삭제</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Market;
