import  { useState } from "react";
import { FaPlus } from "react-icons/fa";
const Messages = () => {
  const [conversations, setConversations] = useState([
    { id: 1, name: "Kavya Singh", lastMessage: "Hey, can you check my report?", time: "2m ago", unread: true },
    { id: 2, name: "Rahul Lakhera", lastMessage: "Thanks! Got it ✅", time: "10m ago", unread: false },
    { id: 3, name: "Aman Sharma", lastMessage: "Meeting at 3PM confirmed.", time: "1h ago", unread: false },
  ]);

  const [messages, setMessages] = useState([
    { id: 1, conversationId: 1, sender: "me", text: "Hello Kavya 👋", time: "9:30 AM" },
    { id: 2, conversationId: 1, sender: "Kavya", text: "Hey Rahul! How are you?", time: "9:32 AM" },
    { id: 3, conversationId: 2, sender: "me", text: "Thanks! Got your mail.", time: "10:00 AM" },
  ]);

  const [selectedChat, setSelectedChat] = useState(null);

  const [newMessage, setNewMessage] = useState("");

  const [isAddingChat, setIsAddingChat] = useState(false);
  const [newChat, setNewChat] = useState({ name: "", firstMessage: "" });

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const newMsg = {
      id: messages.length + 1,
      conversationId: selectedChat,
      sender: "me",
      text: newMessage,
      time: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, newMsg]);

    setConversations((prev) =>
      prev.map((c) =>
        c.id === selectedChat
          ? { ...c, lastMessage: newMessage, time: "Just now" }
          : c
      )
    );

    setNewMessage("");
  };

  const handleAddChat = () => {
    if (!newChat.name.trim() || !newChat.firstMessage.trim()) return;

    const newChatId = conversations.length + 1;

    const newConversation = { 
      id: newChatId,
      name: newChat.name,
      lastMessage: newChat.firstMessage,
      time: "Just now",
      unread: false,
    };

    const newMsg = { 
      id: messages.length + 1,
      conversationId: newChatId,
      sender: "me",
      text: newChat.firstMessage,
      time: new Date().toLocaleTimeString(),
    };

    setConversations([...conversations, newConversation]);
    setMessages([...messages, newMsg]);
    setSelectedChat(newChatId);
    setNewChat({ name: "", firstMessage: "" });
    setIsAddingChat(false); 
  };

  return (
    <div className="flex flex-col sm:flex-row h-[calc(100vh-80px)] mt-1 mb-0 mx-2 border rounded-lg overflow-hidden">
      <div className="w-full sm:w-1/3 border-r overflow-y-auto dark:bg-gray-800">
         <div className="flex justify-between items-center mb-4 py-2 px-2">
          <h2 className="text-xl font-semibold">Messages</h2>
          <button
            onClick={() => setIsAddingChat(true)}
            className="bg-green-500 text-white px-3 py-1 rounded-md flex items-center gap-1 hover:bg-green-600"
          >
            <FaPlus /> <span className="hidden sm:inline">New</span>
          </button>
        </div>
        {conversations.map((c) => (
          <div
            key={c.id}
            onClick={() => setSelectedChat(c.id)}
            className={`p-3 border-b cursor-pointer hover:bg-gray-100 ${
              selectedChat === c.id ? "bg-gray-100" : ""
            }`}
          >
            <p className="font-semibold">{c.name}</p>
            <p className="text-sm text-gray-500 truncate">{c.lastMessage}</p>
            <div className="text-xs text-gray-400">{c.time}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full sm:w-2/3 bg-gray-50 dark:bg-gray-800">
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages
            .filter((m) => m.conversationId === selectedChat)
            .map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs p-2 rounded-lg ${
                    msg.sender === "me"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

          {!selectedChat && (
            <p className="text-center text-gray-500 mt-10">
              👈 Select a chat to start messaging
            </p>
          )}
        </div>

        {selectedChat && (
          <div className="p-3 border-t flex items-center gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Send 
            </button>
          </div>
        )}
      </div>

      {isAddingChat && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg p-5 w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Start New Conversation
            </h3>

            <div className="space-y-3">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={newChat.name}
                  onChange={(e) => setNewChat({ ...newChat, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  First Message
                </label>
                <input
                  type="text"
                  value={newChat.firstMessage}
                  onChange={(e) =>
                    setNewChat({ ...newChat, firstMessage: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setIsAddingChat(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-800 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleAddChat}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Messages;
