import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, XCircle } from 'lucide-react';
import { format, addDays } from 'date-fns';
import { ko } from 'date-fns/locale';

const mockMealPlan = [
  { id: 1, date: new Date(), type: '점심', menu: '현미밥, 된장찌개, 제육볶음, 계란말이, 배추김치' },
  { id: 2, date: new Date(), type: '저녁', menu: '참치김치찌개, 돈까스, 양배추샐러드, 깍두기' },
  { id: 3, date: addDays(new Date(), 1), type: '점심', menu: '카레라이스, 미니우동, 단무지, 배추김치' }
];

export default function UserHome() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [votes, setVotes] = useState({});

  const formattedDate = format(currentDate, 'yyyy년 MM월 dd일 (EEEE)', { locale: ko });
  const todayMeals = mockMealPlan.filter(meal => format(meal.date, 'yyyy-MM-dd') === format(currentDate, 'yyyy-MM-dd'));

  const handleVote = (mealId, status) => {
    setVotes(prev => ({ ...prev, [mealId]: status }));
  };

  const nextDay = () => setCurrentDate(addDays(currentDate, 1));
  const prevDay = () => setCurrentDate(addDays(currentDate, -1));

  return (
    <div className="page fade-in">
      <div className="date-navigator glass">
        <button className="icon-btn" onClick={prevDay}><ChevronLeft /></button>
        <h2 className="current-date">{formattedDate}</h2>
        <button className="icon-btn" onClick={nextDay}><ChevronRight /></button>
      </div>

      <div className="meal-container">
        {todayMeals.length > 0 ? (
          todayMeals.map((meal) => (
            <div key={meal.id} className="meal-card glass card-hover">
              <div className="meal-header">
                <span className="meal-type">{meal.type}</span>
              </div>
              <p className="meal-menu">{meal.menu}</p>
              
              <div className="poll-widget">
                <button 
                  className={`poll-btn eat ${votes[meal.id] === 'yes' ? 'selected' : ''}`}
                  onClick={() => handleVote(meal.id, 'yes')}
                >
                  <CheckCircle2 size={20} /> 먹을래요
                </button>
                <button 
                  className={`poll-btn skip ${votes[meal.id] === 'no' ? 'selected' : ''}`}
                  onClick={() => handleVote(meal.id, 'no')}
                >
                  <XCircle size={20} /> 안 먹을래요
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state glass">
            <p>등록된 식단이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
