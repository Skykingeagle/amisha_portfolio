// src/components/RAGChat.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  IconButton,
  Paper,
  Typography,
  TextField,
  CircularProgress,
  Avatar,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from '@mui/icons-material/Send';

// const API_URL = "http://localhost:5000/chat";
const API_URL = `${import.meta.env.VITE_API_BASE_URL}/chat`;

export default function RAGChat() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi, I'm Amy, Trained by Amisha in her efforts to learn RAG!. Feel free to ask me any questions about this portfolio, the projects, or the owner's skills and resume.",
    },
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Auto-scroll when new messages are added
  useEffect(() => {
    if (open) {
      scrollToBottom();
    }
  }, [messages, loading, open]);

  const toggleOpen = () => setOpen(!open);

  const handleAsk = async () => {
    if (!query.trim()) return;

    const userMessage = { sender: "user", text: query };
    setMessages((prev) => [...prev, userMessage]);
    setQuery("");
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: userMessage.text }),
      });

      if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
      const data = await res.json();
      const botReply = data.answer || data.error || "I'm sorry, I couldn't find an answer.";
      setMessages((prev) => [...prev, { sender: "ai", text: botReply }]);

    } catch (err) {
      setMessages((prev) => [...prev, { sender: "ai", text: `Error: ${err.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    // This structure is based on your original working code, ensuring correct positioning.
    <Box sx={{ position: "fixed", bottom: 24, right: 24, zIndex: 2000 }}>
      {!open && (
        <IconButton
          onClick={toggleOpen}
          sx={{
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            width: 64,
            height: 64,
            boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
          }}
        >
          <ChatIcon fontSize="medium" />
        </IconButton>
      )}

      {open && (
        <Paper
          elevation={8}
          sx={{
            width: 400,
            height: 550,
            maxWidth: "calc(100vw - 48px)",
            maxHeight: "calc(100vh - 48px)",
            borderRadius: 4,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            backgroundColor: "#242526", // Dark, clean background
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              backgroundColor: "#18191a", // Slightly darker header
              color: "#fff",
            }}
          >
            <Typography variant="h6" component="div" sx={{ fontWeight: '600' }}>
              AI Assistant
            </Typography>
            <IconButton onClick={toggleOpen} sx={{ color: "#fff" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Messages */}
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              '::-webkit-scrollbar': { width: '6px' },
              '::-webkit-scrollbar-track': { background: 'transparent' },
              '::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '3px' }
            }}
          >
            {messages.map((msg, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  flexShrink: 0,
                }}
              >
                {msg.sender === "ai" && <Avatar sx={{ bgcolor: "#3a3b3c", mr: 1.5, width: 32, height: 32 }}>A</Avatar>}
                <Paper
                  sx={{
                    p: 1.5,
                    borderRadius: msg.sender === 'user' ? '20px 20px 5px 20px' : '20px 20px 20px 5px',
                    backgroundColor: msg.sender === "user" ? "primary.main" : "#3a3b3c",
                    color: msg.sender === "user" ? "primary.contrastText" : "#e4e6eb",
                    maxWidth: "85%",
                    wordBreak: "break-word",
                  }}
                >
                  <Typography variant="body2">{msg.text}</Typography>
                </Paper>
              </Box>
            ))}
            {loading && (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Avatar sx={{ bgcolor: "#3a3b3c", mr: 1.5, width: 32, height: 32 }}>A</Avatar>
                <CircularProgress size={20} sx={{ color: '#e4e6eb' }} />
              </Box>
            )}
            <div ref={messagesEndRef} />
          </Box>

          {/* Input */}
          <Box sx={{ display: "flex", p: 2, gap: 1, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Ask me anything..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAsk()}
              disabled={loading}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  color: '#e0e0e0',
                  backgroundColor: "#3a3b3c",
                  '& fieldset': { borderColor: 'transparent' },
                  '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                  '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                },
              }}
            />
            <IconButton
              onClick={handleAsk}
              disabled={loading || !query.trim()}
              sx={{
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                "&:hover": { backgroundColor: "primary.dark" },
                "&.Mui-disabled": { backgroundColor: "rgba(255,255,255,0.12)", },
              }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      )}
    </Box>
  );
}