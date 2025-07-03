
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X, Send, Bot, User, MapPin, Clock, TrendingUp } from "lucide-react";

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string | JSX.Element;
  timestamp: Date;
}

interface ChatBotProps {
  onClose: () => void;
}

const ChatBot = ({ onClose }: ChatBotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: (
        <div>
          <p className="mb-3">안녕하세요! 체력 맞춤 코스 추천 챗봇입니다 🚴‍♂️</p>
          <p className="mb-3">몇 가지 질문을 통해 당신에게 맞는 종주 코스를 추천해드릴게요!</p>
          <div className="space-y-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full justify-start"
              onClick={() => handleQuickReply("초보자예요")}
            >
              🔰 자전거 종주 초보자예요
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full justify-start"
              onClick={() => handleQuickReply("어느정도 경험있어요")}
            >
              🚴 어느 정도 경험이 있어요
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full justify-start"
              onClick={() => handleQuickReply("고수예요")}
            >
              🏆 종주 경험이 많아요
            </Button>
          </div>
        </div>
      ),
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleQuickReply = (reply: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: reply,
      timestamp: new Date()
    };

    let botResponse: JSX.Element;

    if (reply === "초보자예요") {
      botResponse = (
        <div>
          <p className="mb-3">초보자분이시군요! 안전하고 즐거운 첫 종주를 위해 추천드릴게요 ✨</p>
          <div className="space-y-3">
            <Card className="p-3 bg-green-50 border-green-200">
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 text-green-600 mr-2" />
                <span className="font-semibold text-green-800">서해안 자전거길</span>
                <Badge variant="secondary" className="ml-2">초급</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">평지 위주로 구성된 344km 코스</p>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                <span>예상 소요: 2-3일</span>
              </div>
            </Card>
            <p className="text-sm text-gray-600">💡 <strong>초보자 팁:</strong> 커뮤니티 게시판에서 "입문자 가이드"를 꼭 확인해보세요!</p>
          </div>
        </div>
      );
    } else if (reply === "어느정도 경험있어요") {
      botResponse = (
        <div>
          <p className="mb-3">중급자분이시네요! 조금 더 도전적인 코스는 어떠세요? 🚴‍♂️</p>
          <div className="space-y-3">
            <Card className="p-3 bg-blue-50 border-blue-200">
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                <span className="font-semibold text-blue-800">동해안 자전거길</span>
                <Badge variant="secondary" className="ml-2">중급</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">아름다운 해안 경치와 적당한 업다운이 있는 770km</p>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                <span>예상 소요: 5-7일</span>
              </div>
            </Card>
          </div>
        </div>
      );
    } else {
      botResponse = (
        <div>
          <p className="mb-3">경험 많은 라이더시군요! 최고 난이도 코스를 추천드릴게요! 🏆</p>
          <div className="space-y-3">
            <Card className="p-3 bg-red-50 border-red-200">
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 text-red-600 mr-2" />
                <span className="font-semibold text-red-800">4대강 종주</span>
                <Badge variant="destructive" className="ml-2">고급</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">한국 대표 종주 코스 633km</p>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                <span>예상 소요: 4-5일</span>
              </div>
            </Card>
            <p className="text-sm text-gray-600">🏅 완주하시면 특별 뱃지를 획득하실 수 있어요!</p>
          </div>
        </div>
      );
    }

    const botMessage: Message = {
      id: messages.length + 2,
      type: 'bot',
      content: botResponse,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    const botMessage: Message = {
      id: messages.length + 2,
      type: 'bot',
      content: "죄송합니다. 현재는 간단한 체력 수준 선택만 지원하고 있어요. 위의 버튼 중 하나를 선택해주세요! 😊",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setInputValue("");
  };

  return (
    <div className="fixed bottom-20 right-6 w-80 h-96 z-50">
      <Card className="h-full flex flex-col shadow-2xl">
        <CardHeader className="pb-3 bg-blue-600 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center">
              <Bot className="h-5 w-5 mr-2" />
              코스 추천 챗봇
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-blue-700 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0">
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.type === 'bot' && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    {message.type === 'user' && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    <div className="text-sm">{message.content}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="메시지를 입력하세요..."
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <Button onClick={handleSend} size="sm">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatBot;
