import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Users, Calendar, MessageSquare, Star, Bike, Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Community = () => {
  const [activeTab, setActiveTab] = useState("riding");
  const [searchQuery, setSearchQuery] = useState("");

  const ridingPosts = [
    {
      id: 1,
      title: "4대강 종주 함께 하실 분 모집합니다!",
      author: "라이더김",
      date: "2024-01-15",
      location: "서울 출발",
      participants: 4,
      maxParticipants: 8,
      difficulty: "중급",
      duration: "3박 4일",
      replies: 12,
      views: 156,
      tags: ["4대강", "종주", "숙박"],
      content: "4월 초에 4대강 종주를 계획 중입니다. 현재 4명이 확정되었고, 4명 더 모집합니다. 경험 있으신 분들과 함께하고 싶어요!"
    },
    {
      id: 2,
      title: "동해안 자전거길 주말 라이딩 (1박 2일)",
      author: "바다라이더",
      date: "2024-01-14",
      location: "강릉 출발",
      participants: 2,
      maxParticipants: 6,
      difficulty: "초급",
      duration: "1박 2일",
      replies: 8,
      views: 89,
      tags: ["동해안", "주말", "초급자환영"],
      content: "동해안 자전거길을 따라 여유롭게 라이딩하며 바다를 구경해요. 초급자도 환영합니다!"
    },
    {
      id: 3,
      title: "한강 자전거길 야간 라이딩 (당일)",
      author: "야간라이더",
      date: "2024-01-13",
      location: "여의도 출발",
      participants: 6,
      maxParticipants: 10,
      difficulty: "초급",
      duration: "당일",
      replies: 15,
      views: 203,
      tags: ["한강", "야간", "당일"],
      content: "한강 야경을 보며 라이딩해요. 라이트 필수! 치킨&맥주로 마무리 예정입니다."
    }
  ];

  const clubPosts = [
    {
      id: 1,
      title: "서울 라이더스 클럽 신규 회원 모집",
      author: "서울라이더스",
      date: "2024-01-15",
      location: "서울 전체",
      members: 45,
      category: "동호회",
      replies: 23,
      views: 342,
      tags: ["서울", "정기모임", "초급자환영"],
      content: "매주 토요일 정기 라이딩을 진행하는 동호회입니다. 초급자부터 고급자까지 모두 환영합니다!"
    },
    {
      id: 2,
      title: "부산 사이클링 크루 멤버 모집",
      author: "부산사이클",
      date: "2024-01-14",
      location: "부산 전체",
      members: 28,
      category: "동호회",
      replies: 18,
      views: 156,
      tags: ["부산", "크루", "주말"],
      content: "부산 지역 사이클링 크루입니다. 주말마다 다양한 코스로 라이딩을 즐기고 있어요."
    },
    {
      id: 3,
      title: "여성 라이더 모임 '걸스온바이크'",
      author: "걸스온바이크",
      date: "2024-01-12",
      location: "전국",
      members: 67,
      category: "동호회",
      replies: 31,
      views: 234,
      tags: ["여성", "전국", "네트워킹"],
      content: "여성 라이더들만의 안전하고 즐거운 모임입니다. 전국 각지에서 활동하고 있어요!"
    }
  ];

  const tipPosts = [
    {
      id: 1,
      title: "종주 시 필수 준비물 체크리스트",
      author: "베테랑라이더",
      date: "2024-01-15",
      likes: 89,
      replies: 24,
      views: 456,
      tags: ["준비물", "팁", "종주"],
      content: "10년 경험을 바탕으로 종주 시 꼭 필요한 준비물들을 정리해봤습니다."
    },
    {
      id: 2,
      title: "자전거 체인 관리 방법",
      author: "정비왕",
      date: "2024-01-14",
      likes: 67,
      replies: 18,
      views: 234,
      tags: ["정비", "체인", "관리"],
      content: "체인 청소부터 주유까지, 자전거 체인을 오래 사용하는 방법을 알려드립니다."
    },
    {
      id: 3,
      title: "겨울철 라이딩 복장 가이드",
      author: "겨울라이더",
      date: "2024-01-13",
      likes: 43,
      replies: 12,
      views: 178,
      tags: ["겨울", "복장", "가이드"],
      content: "추운 겨울에도 따뜻하게 라이딩할 수 있는 복장 팁을 공유합니다."
    }
  ];

  const filterPosts = (posts: any[]) => {
    if (!searchQuery) return posts;
    return posts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
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
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                글쓰기
              </Button>
              <Link to="/">
                <Button variant="outline" size="sm">← 홈으로</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">커뮤니티</h1>
          <p className="text-gray-600">라이더들과 함께 정보를 나누고 동행을 찾아보세요</p>
        </div>

        {/* 검색 바 */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="제목, 내용, 태그로 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button>검색</Button>
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="riding">라이딩 모집</TabsTrigger>
            <TabsTrigger value="club">동호회</TabsTrigger>
            <TabsTrigger value="tips">팁 & 정보</TabsTrigger>
          </TabsList>

          <TabsContent value="riding" className="mt-6">
            <div className="space-y-4">
              {filterPosts(ridingPosts).map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                        <CardDescription className="mb-3">{post.content}</CardDescription>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {post.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {post.participants}/{post.maxParticipants}명
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {post.duration}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {post.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{post.author}</span>
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          {post.replies}
                        </span>
                        <span>조회 {post.views}</span>
                      </div>
                      <Button size="sm">참여하기</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="club" className="mt-6">
            <div className="space-y-4">
              {filterPosts(clubPosts).map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                        <CardDescription className="mb-3">{post.content}</CardDescription>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {post.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {post.members}명 활동
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{post.author}</span>
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          {post.replies}
                        </span>
                        <span>조회 {post.views}</span>
                      </div>
                      <Button size="sm">가입하기</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tips" className="mt-6">
            <div className="space-y-4">
              {filterPosts(tipPosts).map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                        <CardDescription className="mb-3">{post.content}</CardDescription>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{post.author}</span>
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          {post.replies}
                        </span>
                        <span>조회 {post.views}</span>
                      </div>
                      <Button variant="outline" size="sm">읽기</Button>
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

export default Community;
