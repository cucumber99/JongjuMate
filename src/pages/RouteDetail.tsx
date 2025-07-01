
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Star, Clock, Route, TrendingUp, Bike, ArrowLeft, Camera, ThumbsUp, MessageSquare } from "lucide-react";

const RouteDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  // 종주 코스 상세 정보
  const routeData = {
    "1": {
      name: "4대강 종주",
      distance: "633km",
      difficulty: "고급",
      duration: "3-4일",
      rating: 4.8,
      reviews: 342,
      elevation: "2,450m",
      description: "한국의 대표적인 자전거 종주 코스로, 한강, 금강, 영산강, 낙동강을 따라 이어지는 장거리 코스입니다.",
      highlights: ["한강 자전거길", "금강 자전거길", "영산강 자전거길", "낙동강 자전거길"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "2": {
      name: "동해안 자전거길",
      distance: "765km",
      difficulty: "중급",
      duration: "4-5일",
      rating: 4.6,
      reviews: 198,
      elevation: "3,200m",
      description: "동해안을 따라 펼쳐지는 아름다운 해안 경관을 감상할 수 있는 종주 코스입니다.",
      highlights: ["해안 경관", "일출 포인트", "해변 휴식", "해산물 맛집"],
      image: "https://images.unsplash.com/photo-1544191696-15693072e45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    "3": {
      name: "남한강 자전거길",
      distance: "220km",
      difficulty: "초급",
      duration: "1-2일",
      rating: 4.7,
      reviews: 156,
      elevation: "850m",
      description: "초급자도 쉽게 도전할 수 있는 남한강을 따라 이어지는 아름다운 코스입니다.",
      highlights: ["강변 경관", "역사 유적", "전통 시장", "자연 휴양"],
      image: "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  };

  const route = routeData[id as keyof typeof routeData];

  // 주변 시설 데이터
  const nearbyFacilities = [
    {
      id: 1,
      name: "강변 게스트하우스",
      type: "숙소",
      rating: 4.8,
      distance: "1.2km",
      price: "45,000원",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      name: "라이더 카페",
      type: "식당",
      rating: 4.6,
      distance: "0.5km",
      price: "12,000원",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      name: "사이클 펜션",
      type: "숙소",
      rating: 4.7,
      distance: "2.1km",
      price: "38,000원",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  // 완주자 리뷰 데이터
  const reviews = [
    {
      id: 1,
      user: "김라이더",
      rating: 5,
      date: "2024-01-10",
      duration: "3박 4일",
      content: "정말 환상적인 코스였습니다! 특히 한강 구간에서의 일출이 잊을 수 없네요. 체력적으로는 힘들었지만 그만큼 성취감도 컸습니다.",
      likes: 24,
      replies: 5,
      images: ["https://images.unsplash.com/photo-1544191696-15693072e45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"]
    },
    {
      id: 2,
      user: "바이크맨",
      rating: 4,
      date: "2024-01-08",
      duration: "4박 5일",
      content: "중간중간 휴식을 취하며 여유롭게 완주했습니다. 날씨가 좋아서 더욱 즐거웠어요. 다만 일부 구간에서 도로 상태가 아쉬웠습니다.",
      likes: 18,
      replies: 3,
      images: []
    },
    {
      id: 3,
      user: "종주여왕",
      rating: 5,
      date: "2024-01-05",
      duration: "3박 4일",
      content: "세 번째 완주인데 매번 새로운 감동을 줍니다. 이번에는 동행과 함께해서 더욱 의미있었어요. 초보자들에게도 추천하고 싶은 코스입니다.",
      likes: 31,
      replies: 8,
      images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"]
    }
  ];

  if (!route) {
    return <div>코스를 찾을 수 없습니다.</div>;
  }

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
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                홈으로
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={route.image} 
          alt={route.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="container mx-auto px-4 py-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-white/20 text-white border-white/30">
                {route.difficulty}
              </Badge>
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{route.rating}</span>
                <span className="opacity-80">({route.reviews}개 후기)</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-2">{route.name}</h1>
            <p className="text-xl opacity-90 mb-4">{route.description}</p>
            <div className="flex items-center gap-6 text-lg">
              <span className="flex items-center gap-2">
                <Route className="h-5 w-5" />
                {route.distance}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {route.duration}
              </span>
              <span className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                {route.elevation}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">코스 개요</TabsTrigger>
            <TabsTrigger value="facilities">주변 시설</TabsTrigger>
            <TabsTrigger value="reviews">완주 후기</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>코스 지도</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600">지도가 여기에 표시됩니다</p>
                        <p className="text-sm text-gray-500 mt-2">
                          {route.name} 코스 전체 경로
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>코스 정보</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">총 거리</span>
                      <span className="font-semibold">{route.distance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">소요 시간</span>
                      <span className="font-semibold">{route.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">총 고도</span>
                      <span className="font-semibold">{route.elevation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">난이도</span>
                      <Badge variant="outline">{route.difficulty}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">평점</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{route.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>주요 포인트</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {route.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="facilities" className="mt-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">코스 주변 추천 시설</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nearbyFacilities.map((facility) => (
                  <Card key={facility.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative">
                      <img 
                        src={facility.image}
                        alt={facility.name}
                        className="w-full h-40 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-sm">
                        📍 {facility.distance}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold">{facility.name}</h4>
                        <Badge variant="outline">{facility.type}</Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{facility.rating}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-blue-600">{facility.price}</span>
                        <Button size="sm">상세보기</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">완주자 후기 ({reviews.length}개)</h3>
                <Button>후기 작성</Button>
              </div>
              
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold">{review.user}</span>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{review.date}</span>
                          <span>소요시간: {review.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{review.content}</p>
                    {review.images.length > 0 && (
                      <div className="flex gap-2 mb-4">
                        {review.images.map((image, index) => (
                          <img 
                            key={index}
                            src={image}
                            alt="후기 사진"
                            className="w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-80"
                          />
                        ))}
                      </div>
                    )}
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <button className="flex items-center gap-1 hover:text-blue-600">
                        <ThumbsUp className="h-4 w-4" />
                        도움됨 {review.likes}
                      </button>
                      <button className="flex items-center gap-1 hover:text-blue-600">
                        <MessageSquare className="h-4 w-4" />
                        댓글 {review.replies}
                      </button>
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

export default RouteDetail;
