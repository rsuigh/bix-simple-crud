from rest_framework import permissions

class ReadOnlyOrAdminPermission(permissions.BasePermission):
    """
    Custom Permission para usuários autenticados lerem o conteúdo e admins editarem o conteúdo
    """
    def has_permission(self, request, view):
        # leitura para todos os usuários autenticados
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user and request.user.is_superuser