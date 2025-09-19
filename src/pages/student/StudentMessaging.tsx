import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, Send, Search, User, Clock, Paperclip } from "lucide-react";

const StudentMessaging = () => {
  const conversations = [
    {
      id: "1",
      name: "Mr. Smith",
      role: "Mathematics Tutor",
      lastMessage: "Great work on your latest assignment! Keep it up.",
      timestamp: "2024-01-22 10:30",
      unread: 0,
      avatar: "/avatars/tutor1.jpg",
      status: "online"
    },
    {
      id: "2", 
      name: "Dr. Johnson",
      role: "Physics Tutor",
      lastMessage: "The lab report deadline has been extended to Friday.",
      timestamp: "2024-01-22 09:15",
      unread: 2,
      avatar: "/avatars/tutor2.jpg", 
      status: "offline"
    },
    {
      id: "3",
      name: "Ms. Williams",
      role: "English Literature Tutor",
      lastMessage: "Can we schedule a meeting to discuss your essay?",
      timestamp: "2024-01-21 16:45",
      unread: 1,
      avatar: "/avatars/tutor3.jpg",
      status: "online"
    },
    {
      id: "4",
      name: "Prof. Davis", 
      role: "Computer Science Tutor",
      lastMessage: "Here are some additional resources for the programming project.",
      timestamp: "2024-01-21 14:20",
      unread: 0,
      avatar: "/avatars/tutor4.jpg",
      status: "away"
    },
    {
      id: "5",
      name: "Academic Office",
      role: "Administration",
      lastMessage: "Reminder: Registration for next semester opens next week.",
      timestamp: "2024-01-20 11:00",
      unread: 0,
      avatar: "/avatars/admin.jpg",
      status: "offline"
    }
  ];

  const selectedConversation = conversations[0];
  
  const messages = [
    {
      id: "1",
      sender: "Mr. Smith",
      content: "Hi! I wanted to follow up on your calculus assignment from last week.",
      timestamp: "2024-01-22 09:00",
      isOwn: false
    },
    {
      id: "2",
      sender: "You",
      content: "Hello Mr. Smith! Thank you for the feedback. I found the integration problems quite challenging.",
      timestamp: "2024-01-22 09:15", 
      isOwn: true
    },
    {
      id: "3",
      sender: "Mr. Smith",
      content: "That's completely normal! Integration can be tricky at first. Would you like me to schedule some extra practice sessions?",
      timestamp: "2024-01-22 09:18",
      isOwn: false
    },
    {
      id: "4",
      sender: "You", 
      content: "That would be very helpful! When would be a good time for you?",
      timestamp: "2024-01-22 09:25",
      isOwn: true
    },
    {
      id: "5",
      sender: "Mr. Smith",
      content: "Great work on your latest assignment! Keep it up.",
      timestamp: "2024-01-22 10:30",
      isOwn: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <div className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
          <p className="text-muted-foreground">
            Communicate with your tutors and classmates
          </p>
        </div>
        <Button>
          <MessageSquare className="mr-2 h-4 w-4" />
          New Message
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[700px]">
        {/* Conversations List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Conversations
            </CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search conversations..."
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-0 max-h-[500px] overflow-y-auto">
              {conversations.map((conversation, index) => (
                <div key={conversation.id}>
                  <div className={`p-4 hover:bg-muted/50 cursor-pointer transition-colors ${index === 0 ? 'bg-muted' : ''}`}>
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={conversation.avatar} />
                          <AvatarFallback>
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-background ${getStatusColor(conversation.status)}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-semibold truncate">
                            {conversation.name}
                          </h4>
                          {conversation.unread > 0 && (
                            <Badge variant="destructive" className="ml-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {conversation.role}
                        </p>
                        <p className="text-sm text-muted-foreground truncate mt-1">
                          {conversation.lastMessage}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {formatDate(conversation.timestamp)} • {formatTime(conversation.timestamp)}
                        </p>
                      </div>
                    </div>
                  </div>
                  {index < conversations.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="lg:col-span-2 flex flex-col">
          {/* Chat Header */}
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={selectedConversation.avatar} />
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-background ${getStatusColor(selectedConversation.status)}`} />
                </div>
                <div>
                  <CardTitle className="text-lg">{selectedConversation.name}</CardTitle>
                  <CardDescription>{selectedConversation.role}</CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="flex items-center gap-1">
                  <div className={`h-2 w-2 rounded-full ${getStatusColor(selectedConversation.status)}`} />
                  {selectedConversation.status}
                </Badge>
              </div>
            </div>
          </CardHeader>

          <Separator />

          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[400px]">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] ${message.isOwn ? 'order-1' : 'order-2'}`}>
                  <div className={`rounded-lg p-3 ${message.isOwn 
                    ? 'bg-primary text-primary-foreground ml-auto' 
                    : 'bg-muted'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                  <div className={`flex items-center mt-1 text-xs text-muted-foreground ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
                    <Clock className="h-3 w-3 mr-1" />
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>

          <Separator />

          {/* Message Input */}
          <CardContent className="p-4">
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="shrink-0">
                <Paperclip className="h-4 w-4" />
              </Button>
              <div className="flex-1 space-y-2">
                <Textarea
                  placeholder="Type your message..."
                  className="min-h-[60px] resize-none"
                />
              </div>
              <Button size="icon" className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4 mt-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Conversations</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{conversations.length}</div>
            <p className="text-xs text-muted-foreground">Active chats</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
            <Badge variant="destructive" className="h-4 w-4 p-0 flex items-center justify-center text-xs">
              {conversations.reduce((sum, conv) => sum + conv.unread, 0)}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {conversations.reduce((sum, conv) => sum + conv.unread, 0)}
            </div>
            <p className="text-xs text-muted-foreground">Need attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tutors Online</CardTitle>
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {conversations.filter(conv => conv.status === 'online').length}
            </div>
            <p className="text-xs text-muted-foreground">Available now</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">&lt; 1h</div>
            <p className="text-xs text-muted-foreground">Average response</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentMessaging;