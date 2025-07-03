
import { Badge } from "@/components/ui/badge";
import { Award, Star, Mountain, Zap, Crown, Shield } from "lucide-react";

export interface UserBadge {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  earned: boolean;
  earnedDate?: Date;
}

const availableBadges: UserBadge[] = [
  {
    id: "first-ride",
    name: "첫 발걸음",
    description: "첫 종주 완주",
    icon: Star,
    color: "text-yellow-600",
    earned: false
  },
  {
    id: "four-rivers",
    name: "4대강 정복자",
    description: "4대강 종주 완주",
    icon: Crown,
    color: "text-purple-600",
    earned: false
  },
  {
    id: "east-coast",
    name: "동해 라이더",
    description: "동해안 자전거길 완주",
    icon: Mountain,
    color: "text-blue-600",
    earned: false
  },
  {
    id: "west-coast",
    name: "서해 탐험가",
    description: "서해안 자전거길 완주",
    icon: Shield,
    color: "text-green-600",
    earned: false
  },
  {
    id: "speed-demon",
    name: "스피드 데몬",
    description: "평균 속도 30km/h 이상 달성",
    icon: Zap,
    color: "text-orange-600",
    earned: false
  },
  {
    id: "community-helper",
    name: "커뮤니티 도우미",
    description: "후기 10개 이상 작성",
    icon: Award,
    color: "text-pink-600",
    earned: false
  }
];

interface UserBadgesProps {
  userBadges?: UserBadge[];
  showAll?: boolean;
  compact?: boolean;
}

const UserBadges = ({ userBadges = [], showAll = false, compact = false }: UserBadgesProps) => {
  const badges = userBadges.length > 0 ? userBadges : availableBadges;
  const displayBadges = showAll ? badges : badges.filter(badge => badge.earned);

  if (compact) {
    return (
      <div className="flex flex-wrap gap-1">
        {displayBadges.slice(0, 3).map((badge) => {
          const IconComponent = badge.icon;
          return (
            <div
              key={badge.id}
              className={`inline-flex items-center ${badge.earned ? badge.color : 'text-gray-400'}`}
              title={badge.name}
            >
              <IconComponent className="h-4 w-4" />
            </div>
          );
        })}
        {displayBadges.length > 3 && (
          <span className="text-xs text-gray-500">+{displayBadges.length - 3}</span>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">획득한 뱃지</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {badges.map((badge) => {
          const IconComponent = badge.icon;
          return (
            <div
              key={badge.id}
              className={`p-4 border rounded-lg text-center transition-all ${
                badge.earned
                  ? 'border-blue-200 bg-blue-50 shadow-sm'
                  : 'border-gray-200 bg-gray-50 opacity-60'
              }`}
            >
              <IconComponent
                className={`h-8 w-8 mx-auto mb-2 ${
                  badge.earned ? badge.color : 'text-gray-400'
                }`}
              />
              <h4 className={`font-medium mb-1 ${badge.earned ? 'text-gray-800' : 'text-gray-500'}`}>
                {badge.name}
              </h4>
              <p className="text-xs text-gray-600">{badge.description}</p>
              {badge.earned && badge.earnedDate && (
                <Badge variant="secondary" className="mt-2">
                  {badge.earnedDate.toLocaleDateString()}
                </Badge>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserBadges;
export { availableBadges };
