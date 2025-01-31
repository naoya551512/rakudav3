import React from 'react';
import './Makepage.css'; 
import Joyride from "react-joyride";
import $ from 'jquery';
import { useEffect ,useState} from 'react';
import { Button, Typography } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


const Makepage = () => {
    const [tourSteps] = useState([
        {
            target: '#floorPlan', 
            content: '背景が白の時にクリックすると、選択した図形が描画されます。',
            disableBeacon: true, 
        },
        {
            target: '#textInput', 
            content: '形状でテキストが選択されているとき、ここに入力したテキストが表示されます',
        },
        {
            target: '#editbutton', 
            content: '編集モードに切り替えるボタンです。Spaceキーでも切り替えることができます。編集モード中は背景が黄色になり、図形の移動や削除、大きさの微調整、回転ができます',
        },
        {
            target: '#resizebutton', 
            content: 'サイズ変更モードに切り替えるボタンです。Eキーでも切り替えることができます。サイズ変更モード中は背景が赤色になり、図形の大きさをマウスで変えることができます。',
        },
        {
            target: '#editdata', 
            content: 'リンクを生成するとここに編集データが表示されます。それを下のボックスに入力すると、続きから作成できます',
        },
    ]);
        const [isTourRunning, setIsTourRunning] = useState(false);
        const startTour = () => {
        setIsTourRunning(true);
    };
    useEffect(() => {
        
        const canvas = document.getElementById('floorPlan');
        const ctx = canvas.getContext('2d');
        let rooms = [];
        let editingMode = false;
        let resize = false;
        let selectedRoom = null;
        let offsetX = 0;
        let offsetY = 0;
        let isDragging = false;
    
        console.log(offsetX, offsetY);
    
    
        function drawRoom(room) {
            ctx.fillStyle = room.color;
            ctx.strokeStyle = room.color;
            ctx.lineWidth = 2;
    
            ctx.save();
            ctx.translate(room.x + (room.width || 0) / 2, room.y + (room.height || 0) / 2);
            ctx.rotate(room.rotation || 0);
            ctx.translate(-(room.x + (room.width || 0) / 2), -(room.y + (room.height || 0) / 2));
    
            if (room.type === 'square') {
                ctx.fillRect(room.x, room.y, room.width, room.height);
            } else if (room.type === 'line') {
                ctx.beginPath();
                ctx.moveTo(room.x, room.y);
                ctx.lineTo(room.endX, room.endY);
                ctx.stroke();
            } else if (room.type === 'text') {
                ctx.font = '20px Arial';
                ctx.fillText(room.text, room.x, room.y);
            } else if (room.type === 'Vertical_text') { 
                ctx.font = '20px Arial';
                for (let i = 0; i < room.text.length; i++) {
                    ctx.fillText(room.text[i], room.x, room.y + i * 22); 
                }
            }
            ctx.restore();
        }
    
        function redrawRooms() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            rooms.forEach(drawRoom);
        }
    
        function selectRoom(x, y) {
            for (let room of rooms) {
                if (room.type === 'square' && x >= room.x && x <= room.x + room.width && y >= room.y && y <= room.y + room.height) {
                    return room;
                }  else if (room.type === 'line' && x >= room.x && x <= room.endX && y >= room.y - 5 && y <= room.y + 5) {
                    return room;
                } else if (room.type === 'Vertical_text' && x >= room.x && x <= room.x + 20 && y >= room.y && y <= room.y + 22 * room.text.length) {
                    return room;
                } else if (room.type === 'text' && x >= room.x && x <= room.x + ctx.measureText(room.text).width && y >= room.y - 20 && y <= room.y) {
                    return room;
                }
            }
            return null;
        }
    
        canvas.addEventListener('click', function(event) {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
    
            if (editingMode) {
                selectedRoom = selectRoom(x, y);
                if (selectedRoom) {
                    document.getElementById('roomColor').value = selectedRoom.color;
                    document.getElementById('textInput').value = selectedRoom.text || '';
                }
            }else if(resize){
                selectedRoom = selectRoom(x, y); 
                if (selectedRoom) {
                    document.getElementById('roomColor').value = selectedRoom.color;
                    document.getElementById('textInput').value = selectedRoom.text || '';
                }
            }
            else {
                const color = document.getElementById('roomColor').value;
                const shape = document.getElementById('shape').value;
                const text = document.getElementById('textInput').value;
    
                if (shape === 'square') {
                    const width = 100, height = 50;
                    ctx.fillRect(x, y, width, height);
                    rooms.push({ type: 'square', x, y, width, height, color });
                } else if (shape === 'line') {
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + 100, y);
                    ctx.stroke();
                    rooms.push({ type: 'line', x, y, endX: x + 100, endY: y, color });
                } else if (shape === 'text') {
                    ctx.font = '20px Arial';
                    ctx.fillText(text, x, y);
                    rooms.push({ type: 'text', x, y, text, color });
                } else if (shape === 'Vertical_text') {
                    rooms.push({ type: 'Vertical_text', x, y, text, color });
                    for (let i = 0; i < text.length; i++) {
                        ctx.fillText(text[i], x, y + i * 22);
                    }
                }
                redrawRooms();
            }
        });
    
        document.getElementById('editbutton').addEventListener('click', function() {
            editingMode = !editingMode;
            if (editingMode) {
                resize = false;
                canvas.style.backgroundColor = 'rgba(255, 255, 0, 0.1)';
            } else {
                canvas.style.backgroundColor = 'white';
                selectedRoom = null;
            }
        });
    
        document.getElementById('resizebutton').addEventListener('click', function() {
            resize = !resize;
            if (resize) {
                editingMode = false;
                canvas.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
            } else {
                canvas.style.backgroundColor = 'white';
                selectedRoom = null;
            }
        });
    
        canvas.addEventListener('mousedown', function(event) {
            if (selectedRoom) {
                const rect = canvas.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                offsetX = x - selectedRoom.x;
                offsetY = y - selectedRoom.y;
                isDragging = true;
            }
            if (true) {
                const rect = canvas.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                selectedRoom = selectRoom(x, y);
                isDragging = selectedRoom !== null;
            }
        });
    
        canvas.addEventListener('mousemove', function(event) {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            if (isDragging && selectedRoom && editingMode) {  
                const offsetX = x - selectedRoom.x;
                const offsetY = y - selectedRoom.y;
                selectedRoom.x += offsetX;
                selectedRoom.y += offsetY;
                selectedRoom.endX += offsetX;
                selectedRoom.endY += offsetY;
            }else if(isDragging && selectedRoom && resize){
                if (selectedRoom.type === 'line') {
                    // ラインのリサイズ処理
                    selectedRoom.endX = Math.max(x, selectedRoom.x + 10); // 終点を始点の右側に設定
                    selectedRoom.endY = y; // 縦の位置を更新
                } else {
                    // 他の図形のリサイズ処理
                    selectedRoom.width = Math.max(x - selectedRoom.x, 10);  // 幅を10以上に制限
                    selectedRoom.height = Math.max(y - selectedRoom.y, 10); // 高さを10以上に制限
                }
    
            }
            redrawRooms();
        });
    
        canvas.addEventListener('mouseup', function(event) {
            isDragging = false;
            
        });
    
        document.getElementById('sizeup').addEventListener('click', function() {
            if (selectedRoom) {
                selectedRoom.width += 2;
                selectedRoom.height += 2;
                redrawRooms();
            }
        });
    
        document.getElementById('sizedown').addEventListener('click', function() {
            if (selectedRoom) {
                selectedRoom.width = Math.max(10, selectedRoom.width - 2);
                selectedRoom.height = Math.max(10, selectedRoom.height - 2);
                redrawRooms();
            }
        });
    
        document.getElementById('rotate').addEventListener('click', function() {
            if (selectedRoom) {
                selectedRoom.rotation = (selectedRoom.rotation || 0) + Math.PI / 4;
                redrawRooms();
            }
        });
    
        document.getElementById('deleteRoom').addEventListener('click', function() {
            if (selectedRoom) {
                rooms = rooms.filter(room => room !== selectedRoom);
                selectedRoom = null;
                redrawRooms();
            }
        });
    
        document.getElementById('generateQR').addEventListener('click', function() {
            const button = document.getElementById('generateQR');
            button.disabled = true;
            const url = `https://brilliant-elf-951050.netlify.app/?rooms=${encodeURIComponent(JSON.stringify(rooms))}`;
            const formattedUrl = addLineBreaks(url); 
            $('#generatedLink').html(`<a href="${url}" target="_blank">${formattedUrl}</a>`);
            $('#editdata').val(JSON.stringify(rooms));
            console.log('イベントリスナーが発火しました'); 
            alert('QRコードが生成されました');
            setTimeout(() => {
                button.disabled = false;
            }, 1000);
            
        },);
    
        document.getElementById('applyEditData').addEventListener('click', function() {
            const inputData = document.getElementById('roomdata').value;
        
            if (!inputData) {
                alert("エラー: データが空です。");
                return;
            }
        
            try {
                rooms = JSON.parse(inputData);
        
                if (!Array.isArray(rooms) || rooms.length === 0) {
                    alert("エラー: データが無効です。正しい形式で入力してください。");
                    return;
                }
        
                redrawRooms();
            } catch (error) {
                alert("エラー: データの形式が無効です。JSON形式で入力してください。");
            }
        },[]);
        
        document.getElementById('copyButton').addEventListener('click', function() {
            const textarea = document.getElementById('editdata');
            textarea.select();
            document.execCommand('copy');
        });
    
        document.getElementById('clearButton').addEventListener('click', function() {
            document.getElementById("roomdata").value = '';
        });
    
        document.getElementById('pasteButton').addEventListener('click', function() {
            navigator.clipboard.readText().then(function(text) {
                document.getElementById("roomdata").value = text;
            }).catch(function(err) {
                console.error('ペーストに失敗しました', err);
            });
        });
    
    
        function addLineBreaks(text, interval = 10) {
            const regex = new RegExp(`(.{${interval}})`, 'g');
            return text.replace(regex, '$1\n');
        }
    
        document.addEventListener('keydown', function(event) {
    
            const inputBox = document.getElementById('textInput');
            if (document.activeElement === inputBox) {
                return; 
            }
            if (event.key === 'r') {
                if (selectedRoom) {
                    selectedRoom.rotation = (selectedRoom.rotation || 0) + Math.PI / 4;
                    redrawRooms();
                }   
            }
            if (event.key === ' ') { 
                editingMode = !editingMode;
                if (editingMode) {
                    resize = false;
                    canvas.style.backgroundColor = 'rgba(255, 255, 0, 0.1)';
                } else {
                    canvas.style.backgroundColor = 'white';
                    selectedRoom = null;
                }
                event.preventDefault(); 
            }
            if (event.key === 'q') { 
                if (selectedRoom) {
                    rooms = rooms.filter(room => room !== selectedRoom);
                    selectedRoom = null;
                    redrawRooms();
                }
            }
            if (event.key === 'e') { 
                resize = !resize;
                if (resize) {
                    editingMode = false;
                    canvas.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
                } else {
                    canvas.style.backgroundColor = 'white';
                    selectedRoom = null;
                }
            }
            
        });
      }, []);
      
  return (
    
    <div id="content"> 
      <div id="main"> 
        <canvas id="floorPlan" width="940" height="900"></canvas> 
      </div>
      <nav>
        <div>
        
        <div class="container">
        <Button 
            onClick={startTour}
            startIcon={<HelpOutlineIcon />} 
            variant="contained"
            sx={{ backgroundColor: 'blue' }}
        >
            <Typography sx={{ color: 'white' }}>使い方</Typography> 
        </Button>
            <label class="title">形状:</label>
            <select id="shape" class="select">
                <option value="square">四角形</option>
                <option value="line">線</option>
                <option value="text">テキスト</option>
                <option value="Vertical_text">縦書きテキスト</option>
            </select>
        </div>
        <label for="textInput" class="input-label">テキスト:</label>
        <input type="text" id="textInput" class="text-input" placeholder="テキストを入力" />

          <label>色: 
            <input 
              type="color" 
              id="roomColor" 
              defaultValue="#ADD8E6" 
            />
          </label>
          <button id="editbutton">編集モード(Space)</button>
          <button id="resizebutton">サイズ変更モード(E)</button>
        </div>
        <div>
          <button id="sizedown">小さく</button>
          <button id="sizeup">大きく</button>
          <button id="rotate">傾ける (R)</button>
          <button id="deleteRoom">削除 (Q)</button>
          <button id="generateQR">リンク生成</button>
          
        </div>
        <br></br>
        <h2>編集データ</h2>
        <textarea id="editdata" readOnly rows="5" cols="40"></textarea>
        <button id="copyButton">コピー</button>
        <textarea 
          id="roomdata" 
          rows="5" 
          cols="40" 
          placeholder="編集コードを入力..."
        />
        <button id="applyEditData">適用</button>
        <button id="clearButton">クリア</button>
        <button id="pasteButton">ペースト</button>

        <div id="qrCode"></div>
        <div id="generatedLink"></div>
        <div className="Makepage">
        <div>
    
      <Joyride
        steps={tourSteps}         
        continuous={true}         
        showSkipButton={true}     
        showProgress={true}       
        run={isTourRunning}       
        callback={({ status }) => {
          if (status === 'finished' || status === 'skipped') {
            setIsTourRunning(false); 
          }
        }}
      />
      
     
    </div>
    </div>
      </nav>
    </div>
  );

  }
export default Makepage;
