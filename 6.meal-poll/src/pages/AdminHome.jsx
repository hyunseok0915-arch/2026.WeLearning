import React, { useState } from 'react';
import { format, addDays } from 'date-fns';

export default function AdminHome() {
  const [menuInput, setMenuInput] = useState('');
  
  const handleSave = (e) => {
    e.preventDefault();
    alert('식단이 저장되었습니다! (Mock)');
    setMenuInput('');
  };

  return (
    <div className="page fade-in">
      <h2 className="section-title">식수 인원 현황 (오늘)</h2>
      <div className="dashboard-grid">
        <div className="stat-card glass card-hover">
          <h3 className="stat-label">점심 식수 (예상)</h3>
          <div className="stat-value text-green">142<span className="stat-unit">명</span></div>
        </div>
        <div className="stat-card glass card-hover">
          <h3 className="stat-label">저녁 식수 (예상)</h3>
          <div className="stat-value text-orange">85<span className="stat-unit">명</span></div>
        </div>
      </div>

      <h2 className="section-title mt-8">식단표 등록</h2>
      <div className="editor-card glass">
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label>날짜 선택</label>
            <input type="date" className="form-input" defaultValue={format(new Date(), 'yyyy-MM-dd')} />
          </div>
          <div className="form-group">
            <label>구분</label>
            <select className="form-input">
              <option>점심</option>
              <option>저녁</option>
            </select>
          </div>
          <div className="form-group">
            <label>메뉴 내용</label>
            <textarea 
              className="form-input" 
              rows="4" 
              placeholder="콤마(,)나 줄바꿈으로 메뉴를 입력하세요"
              value={menuInput}
              onChange={(e) => setMenuInput(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn-primary">저장하기</button>
        </form>
      </div>
    </div>
  );
}
